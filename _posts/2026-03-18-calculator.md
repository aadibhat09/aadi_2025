---
title: RPN Calculator
comments: false
layout: post
description: An RPN Visual Claculator
---

<style>
  .rpn-wrap {
    max-width: 500px;
    margin: 2rem auto;
    padding: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fafafa;
    font-family: system-ui, -apple-system, sans-serif;
  }

  .rpn-title {
    margin: 0 0 1.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
  }

  .rpn-row {
    margin-bottom: 1rem;
  }

  .rpn-input {
    width: 100%;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #bbb;
    background: white;
    color: #333;
    padding: 0.6rem 0.7rem;
    font-size: 1rem;
  }

  .rpn-btn {
    border: 1px solid #999;
    border-radius: 3px;
    padding: 0.55rem 0.7rem;
    background: #f0f0f0;
    color: #333;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.9rem;
  }

  .rpn-btn:hover {
    background: #e0e0e0;
  }

  .rpn-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.4rem;
    margin-bottom: 1rem;
  }

  .rpn-panels {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
    margin-bottom: 1rem;
  }

  .rpn-panel {
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 0.8rem;
    background: white;
    min-height: auto;
  }

  .rpn-label {
    font-size: 0.75rem;
    color: #666;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.4px;
  }

  .rpn-value {
    font-family: monospace;
    word-break: break-all;
    font-size: 0.85rem;
    color: #333;
  }

  .rpn-steps {
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 0.8rem;
    background: white;
    margin-bottom: 1rem;
  }

  .rpn-steps ul {
    margin: 0.5rem 0 0;
    padding-left: 1.5rem;
  }

  .rpn-steps li {
    margin-bottom: 0.3rem;
    font-size: 0.85rem;
    font-family: monospace;
    color: #444;
  }

  .rpn-msg {
    font-size: 0.85rem;
    color: #666;
    min-height: 1rem;
  }

  @media (max-width: 600px) {
    .rpn-grid {
      grid-template-columns: repeat(4, 1fr);
    }

    .rpn-panels {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="rpn-wrap" id="rpn-calculator">
  <h3 class="rpn-title">RPN Calculator</h3>

  <div class="rpn-row">
    <input id="expr-input" class="rpn-input" type="text" placeholder="2 + 3 * 4" />
  </div>

  <div class="rpn-grid" id="keypad">
    <button class="rpn-btn" data-insert="7">7</button>
    <button class="rpn-btn" data-insert="8">8</button>
    <button class="rpn-btn" data-insert="9">9</button>
    <button class="rpn-btn" data-insert=" / ">÷</button>
    <button class="rpn-btn" data-action="back">Back</button>

    <button class="rpn-btn" data-insert="4">4</button>
    <button class="rpn-btn" data-insert="5">5</button>
    <button class="rpn-btn" data-insert="6">6</button>
    <button class="rpn-btn" data-insert=" * ">×</button>
    <button class="rpn-btn" data-action="clearExpr">Clear</button>

    <button class="rpn-btn" data-insert="1">1</button>
    <button class="rpn-btn" data-insert="2">2</button>
    <button class="rpn-btn" data-insert="3">3</button>
    <button class="rpn-btn" data-insert=" - ">−</button>
    <button class="rpn-btn" data-insert="0">0</button>

    <button class="rpn-btn" data-insert="." style="grid-column: span 2;">.</button>
    <button class="rpn-btn" data-insert="(">(</button>
    <button class="rpn-btn" data-insert=")">)</button>
    <button class="rpn-btn" data-insert=" + ">+</button>
  </div>

  <button id="eval-btn" class="rpn-btn" style="width: 100%; padding: 0.7rem; font-weight: 600; margin-bottom: 1rem;">Evaluate</button>

  <div class="rpn-panels">
    <div class="rpn-panel">
      <div class="rpn-label">RPN Output</div>
      <div id="rpn-output" class="rpn-value">—</div>
    </div>
    <div class="rpn-panel">
      <div class="rpn-label">Main Stack</div>
      <div id="main-stack" class="rpn-value">[]</div>
    </div>
  </div>

  <div class="rpn-steps">
    <div class="rpn-label">Evaluation Steps</div>
    <ul id="step-list"></ul>
  </div>

  <div id="status-msg" class="rpn-msg"></div>
</div>

<script>
(() => {
  const exprInput = document.getElementById("expr-input");
  const evalBtn = document.getElementById("eval-btn");
  const keypad = document.getElementById("keypad");
  const rpnOutput = document.getElementById("rpn-output");
  const mainStackEl = document.getElementById("main-stack");
  const stepList = document.getElementById("step-list");
  const statusMsg = document.getElementById("status-msg");

  const mainStack = [];

  function fmt(value) {
    if (Number.isFinite(value) && Math.abs(value - Math.round(value)) < 1e-10) {
      return String(Math.round(value));
    }
    return String(Number(value.toFixed(10)));
  }

  function renderMainStack() {
    mainStackEl.textContent = `[${mainStack.map(fmt).join(", ")}]`;
  }

  function setStatus(message, isError = false) {
    statusMsg.textContent = message;
    statusMsg.style.color = isError ? "#ffb4b4" : "inherit";
  }

  function isOperator(token) {
    return token === "+" || token === "-" || token === "*" || token === "/";
  }

  function precedence(token) {
    if (token === "+" || token === "-") return 1;
    if (token === "*" || token === "/") return 2;
    return -1;
  }

  function isNumber(token) {
    return /^-?(\d+\.?\d*|\.\d+)$/.test(token);
  }

  function tokenize(expression) {
    const tokens = [];
    let i = 0;

    while (i < expression.length) {
      const c = expression[i];

      if (/\s/.test(c)) {
        i++;
        continue;
      }

      if (c === "(" || c === ")") {
        tokens.push(c);
        i++;
        continue;
      }

      const prev = tokens[tokens.length - 1];
      const unaryMinus = c === "-" && (tokens.length === 0 || isOperator(prev) || prev === "(");

      if (unaryMinus || /\d|\./.test(c)) {
        let start = i;
        if (unaryMinus) i++;
        while (i < expression.length && /\d|\./.test(expression[i])) i++;
        const num = expression.slice(start, i);
        if (!isNumber(num)) throw new Error(`Invalid number: ${num}`);
        tokens.push(num);
        continue;
      }

      if (isOperator(c)) {
        tokens.push(c);
        i++;
        continue;
      }

      throw new Error(`Unexpected character: ${c}`);
    }

    if (tokens.length === 0) throw new Error("Expression is empty.");
    return tokens;
  }

  function withImplicitMultiplication(tokens) {
    const out = [];
    for (const token of tokens) {
      const prev = out[out.length - 1];
      if (prev && ((isNumber(prev) || prev === ")") && token === "(")) out.push("*");
      if (prev && (prev === ")" && isNumber(token))) out.push("*");
      out.push(token);
    }
    return out;
  }

  function infixToRpn(tokens) {
    const output = [];
    const ops = [];

    for (const token of tokens) {
      if (isNumber(token)) {
        output.push(token);
      } else if (isOperator(token)) {
        while (ops.length && isOperator(ops[ops.length - 1]) && precedence(ops[ops.length - 1]) >= precedence(token)) {
          output.push(ops.pop());
        }
        ops.push(token);
      } else if (token === "(") {
        ops.push(token);
      } else if (token === ")") {
        let foundOpen = false;
        while (ops.length) {
          const top = ops.pop();
          if (top === "(") {
            foundOpen = true;
            break;
          }
          output.push(top);
        }
        if (!foundOpen) throw new Error("Mismatched parentheses.");
      }
    }

    while (ops.length) {
      const op = ops.pop();
      if (op === "(" || op === ")") throw new Error("Mismatched parentheses.");
      output.push(op);
    }

    return output;
  }

  function applyOperator(a, b, op) {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "/") {
      if (Math.abs(b) < 1e-12) throw new Error("Cannot divide by zero.");
      return a / b;
    }
    throw new Error(`Unknown operator: ${op}`);
  }

  function evaluateRpn(rpnTokens) {
    const evalStack = [];
    const steps = [];

    for (const token of rpnTokens) {
      if (isNumber(token)) {
        evalStack.unshift(Number(token));
      } else if (isOperator(token)) {
        if (evalStack.length < 2) throw new Error(`Malformed expression near ${token}`);
        const left = evalStack[1];
        const right = evalStack[0];
        evalStack.splice(0, 2);
        evalStack.unshift(applyOperator(left, right, token));
      } else {
        throw new Error(`Invalid RPN token: ${token}`);
      }

      steps.push(`token '${token}' -> [${evalStack.map(fmt).join(", ")}]`);
    }

    if (evalStack.length !== 1) throw new Error("Malformed expression.");
    return { result: evalStack[0], steps };
  }

  function renderSteps(steps) {
    stepList.innerHTML = "";
    if (!steps.length) {
      const li = document.createElement("li");
      li.textContent = "No steps yet.";
      stepList.appendChild(li);
      return;
    }
    for (const step of steps) {
      const li = document.createElement("li");
      li.textContent = step;
      stepList.appendChild(li);
    }
  }

  function evaluateExpression() {
    try {
      const expression = exprInput.value.trim();
      const tokens = withImplicitMultiplication(tokenize(expression));
      const rpn = infixToRpn(tokens);
      const { result, steps } = evaluateRpn(rpn);

      rpnOutput.textContent = rpn.join(" ");
      renderSteps(steps);

      mainStack.unshift(result);
      renderMainStack();
      setStatus(`Result: ${fmt(result)}`);
    } catch (error) {
      setStatus(error.message, true);
    }
  }

  evalBtn.addEventListener("click", evaluateExpression);
  exprInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") evaluateExpression();
  });

  keypad.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target.dataset.insert) {
      exprInput.value += target.dataset.insert;
      exprInput.focus();
      return;
    }

    if (target.dataset.action === "back") {
      exprInput.value = exprInput.value.slice(0, -1);
      exprInput.focus();
      return;
    }

    if (target.dataset.action === "clearExpr") {
      exprInput.value = "";
      setStatus("Expression cleared.");
      exprInput.focus();
      return;
    }

    if (target.dataset.action === "clearStack") {
      mainStack.length = 0;
      renderMainStack();
      setStatus("Main stack cleared.");
    }
  });

  renderMainStack();
  renderSteps([]);
  setStatus("Ready.");
})();
</script>

### About this calculator

Enter regular math expressions using the keypad or type directly. The calculator evaluates your expression using the **Shunting Yard algorithm** to convert it into Reverse Polish Notation (RPN). Each step of the evaluation is displayed so you can see how the stack processes the operators and operands. Supports operator precedence, parentheses, and implicit multiplication (e.g., `2(3+4)` → `2 * (3 + 4)`).