module.exports = {
    apps: [
      {
        name: "argochainStaking",
        script: "yarn",
        args: "start",
        autorestart: true,
        time: true,
        restart_delay: 3000,
        watch: true,
        ignore_watch: [ "node_modules", "logs" ],
        max_memory_restart: "4G",
        log_date_format: "YYYY-MM-DD HH:mm Z"
      },
    ],
  };