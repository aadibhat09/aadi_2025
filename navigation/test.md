---
layout: page
title: Instabox
permalink: /instabox/
---

<title>Instabox</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #333;
        color: white;
        margin: 0;
        padding: 0;
    }
    h1 {
        /* Secret comment */
        text-align: center;
        background-color: #6a59a3;
        padding: 10px;
        margin: 0;
        border-bottom: 4px dashed #fff;
    }
    .container {
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 1fr 2fr;
        grid-gap: 20px;
        padding: 20px;
    }
    .box {
        background-color: #444;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    }
    .box h2 {
        text-align: center;
    }
    /* Friends List */
    .friends {
        height: 200px;
        overflow-y: scroll;
        padding: 10px;
    }
    .friends div {
        padding: 10px;
        border-bottom: 1px solid #777;
    }
    /* Instabox */
    .instabox {
        height: 400px;
        background-color: #555;
        padding: 10px;
        border-radius: 5px;
        overflow-y: auto;
    }
    .instabox textarea {
        width: 100%;
        height: 60px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        margin-top: 10px;
        font-size: 14px;
    }
    /* Leaderboard */
    .leaderboard {
        padding: 10px;
        height: 200px;
        overflow-y: scroll;
    }
    .leaderboard ul {
        list-style: none;
        padding: 0;
    }
    .leaderboard ul li {
        padding: 10px;
        border-bottom: 1px solid #777;
    }
    /* Stats */
    .stats {
        padding: 10px;
    }
    /* Grid specific layout */
    .theme {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
    }
    .friends-box {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
    }
    .instabox-box {
        grid-row: 2 / 3;
        grid-column: 1 / 3;
    }
    .leaderboard-box {
        grid-row: 3 / 4;
        grid-column: 2 / 3;
    }
    .stats-box {
        grid-row: 3 / 4;
        grid-column: 1 / 2;
    }

    /* Adjust column widths */
    .container {
        grid-template-columns: 1fr 2fr; /* First column narrow, second column wide */
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .container {
            grid-template-columns: 1fr;
        }
    }
</style>
<body>
    <h1>INSTABOX</h1>
    <div class="container">
        <div class="box theme">
            <h2>Theme OTD 📚</h2>
            <p>Today's theme of the day is... <strong>CHEMISTRY</strong> ✏️</p>
            <p>Include this in your chats to rank higher!</p>
        </div>
        <div class="box friends-box">
            <h2>Friends 👥</h2>
            <div class="friends">
                <div><strong>Shish Kabob:</strong> Hey bro! What’s good?</div>
                <div><strong>Googly Moogly:</strong> WHAT THE HECK!</div>
                <div><strong>Jenneth Jabberson:</strong> Hello, is anyone there?</div>
                <div><strong>Galvin Ized-Steel:</strong> OH SHOOT...</div>
                <div><strong>Shannon Cannonball:</strong> Do you prefer physics or chem?</div>
                <div><strong>Frenk Bonobo:</strong> Guess what! I just aced that quiz.</div>
            </div>
        </div>
        <div class="box instabox-box">
            <h2>Instabox 💬</h2>
            <div class="instabox" id="instabox">
                <p><strong>Shish Kabob:</strong> Hey bro! What’s good [1 hr ago]</p>
                <p><strong>Me:</strong> Nothing much, just studying for AP Chemistry.</p>
                <p>You responded one hour and 23 minutes after the notification, with a bonus of -60 points, for a total of 63 points!</p>
            </div>
            <textarea id="chatInput" placeholder="Type your message..."></textarea>
        </div>
        <div class="box leaderboard-box">
            <h2>Leaderboard 🏆</h2>
            <div class="leaderboard">
                <ul>
                    <li>🥇 Rama Kama Jamabama - 63</li>
                    <li>🥈 Jenneth Jabberson - 159</li>
                    <li>🥉 Googly Moogly - 203</li>
                    <li>🔺 Shannon Cannonball - 443</li>
                    <li>🔺 Shish Kabob - 652</li>
                    <li>🔺 Frenk Bonobo - 654</li>
                    <li>🔺 Galvin Ized-Steel - 730</li>
                </ul>
            </div>
        </div>
        <div class="box stats-box">
            <h2>Stats 📊</h2>
            <div class="stats">
                <p><strong>Today's score:</strong> 63</p>
                <p><strong>Average score [weekly]:</strong> 104</p>
                <p><strong>Average score [monthly]:</strong> 251</p>
                <p><strong>Times on leaderboard:</strong> 13</p>
                <p><strong>Times on podium:</strong> 2</p>
            </div>
        </div>
    </div>
    <script>
        // Handle chat input submission
        const instabox = document.getElementById("instabox");
        const chatInput = document.getElementById("chatInput");
        chatInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                const newMessage = document.createElement("p");
                newMessage.innerHTML = `<strong>Me:</strong> ${chatInput.value}`;
                instabox.appendChild(newMessage);
                chatInput.value = "";
                instabox.scrollTop = instabox.scrollHeight; // Scroll to the latest message
            }
        });
    </script>
</body>
