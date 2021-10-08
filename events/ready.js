module.exports = async (client) => {
  let statuses = [
    "say !help",
    "Music",
    "dms to DNA#1466 if u need help"
  ]

  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, {
      type: "LISTENING",
    });
  }, 1000);

  console.log(`[API] Logged in as ${client.user.username}`);
};