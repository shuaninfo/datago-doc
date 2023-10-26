# Configuration

#### directory structure

```bash
sqldev ---------------------------------- /opt/sqldev application directory
├── config ------------------------------ configuration file directory
│ ├── __global___.ini
│ ├── app.ini ------------------------- application configuration
│ ├── gorm.ini ------------------------ Database configuration
│ └── sqldev.ini ---------------------- System configuration
├── sqldev ------------------------------ binary (upgrade)
├── install.sh -------------------------- installation script
├─ init.sh ----------------------------- initialization script
├── start.sh ---------------------------- Start script
└── stop.sh ----------------------------- shutdown script


ðŸ™' ðŸ™'


Note: Because of the development framework used, some configuration items are not related to the application, so they are not listed anymore, only the application-related configuration items and their descriptions are shown.


#### app.ini configuration description
```ini
#max_rows
max_rows = 10000
#cas login server.
cas_server = https://cas.login.abc.com
#front-end application server address
ui_server = http://sqldev.abc.com
#login mode
login_mode = normal
#File export directory
export_path = /opt/sqldev/export
export_patch = 3
export_timeout = 300
log_path = . /log/
export_batch = 10
# Registration Code
license = xxx
#redis database configuration
[redis]
pool_size = 10
host = 127.0.0.1
port = 6379
password =
```



#### gorm.ini configuration instructions
```ini
[default]
name = app
enable = true
driver = mysql
#SQLDEV application database
connstring = root:root@tcp(127.0.0.1:3306)/sqldev?charset=utf8&parseTime=true&loc=Asia%2FShanghai
max_open_conns = 100
max_idle_conns = 100
#Whether to print database statements
show_sql = false
```



#### sqldev.ini Configuration Notes
```ini
#Application port
addrs = 0.0.0.0:9000
```







