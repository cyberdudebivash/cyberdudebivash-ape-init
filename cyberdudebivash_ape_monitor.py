#!/usr/bin/env python3
"""
cyberdudebivash-ape-monitor v1.0
The Autonomous Guardian: Real-time Docker Log Monitoring & Self-Healing
Copyright (c) 2026 CYBERDUDEBIVASH. All Rights Reserved.
"""

import docker
import logging
import time
import sys
from datetime import datetime

# Brand-Aligned Logging
logging.basicConfig(
    level=logging.INFO,
    format="\033[94m[cyberdudebivash-ape-monitor]\033[0m %(asctime)s - %(message)s"
)
logger = logging.getLogger("cyberdudebivash-ape")

class CyberdudeBivashApeMonitor:
    def __init__(self):
        try:
            self.client = docker.from_env()
            logger.info("🛡️  cyberdudebivash-ape-monitor successfully connected to Docker Engine.")
        except Exception as e:
            logger.error(f"❌ Failed to connect to Docker: {e}")
            sys.exit(1)

    def monitor_container(self, container_name):
        """Streams logs and triggers self-healing on 5xx errors."""
        try:
            container = self.client.containers.get(container_name)
            logger.info(f"👀 Now monitoring: {container_name}")
            
            # Tail logs starting from now
            for line in container.logs(stream=True, tail=10, follow=True):
                log_line = line.decode('utf-8').strip()
                
                # Check for Critical "500 Internal Server Error"
                if " 500 " in log_line or "ERROR" in log_line.upper():
                    logger.warning(f"🚨 ALERT: Issue detected in {container_name}: {log_line}")
                    self.heal_container(container)

        except docker.errors.NotFound:
            logger.error(f"❌ Container '{container_name}' not found.")
        except Exception as e:
            logger.error(f"❌ Monitoring interrupted: {e}")

    def heal_container(self, container):
        """Self-healing logic: Restarts container and logs the event."""
        logger.info(f"🛠️  cyberdudebivash-ape is executing self-healing for {container.name}...")
        try:
            container.restart()
            logger.info(f"✅ {container.name} has been successfully recovered and restarted.")
        except Exception as e:
            logger.error(f"❌ Healing failed for {container.name}: {e}")

if __name__ == "__main__":
    monitor = CyberdudeBivashApeMonitor()
    
    # Example usage: Change 'my-billion-dollar-app' to your actual container name
    TARGET = sys.argv[1] if len(sys.argv) > 1 else "cyberdudebivash-app"
    monitor.monitor_container(TARGET)