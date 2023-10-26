# Updates

Update file directory schema

```bash
sqldev ---------------------------------- application directory
├── config ------------------------------ configuration file directory
├── sqldev ------------------------------ binary file (replace upgrade)







#### 1. Shutting down the application
```shell
cd /opt/sqldev
sh stop.sh
```


#### 2. Download the latest version and unzip
```shell
cd /home
wget http://static.shuaninfo.com/sqldev/sqldev-xxx.tar.gz
tar -zxvf sqldev-xxx.tar.gz
cd sqldev-xxx
```


#### 3. Replace the binary file
```shell
cp /home/sqldev-xxx/sqldev /opt/sqldev/sqldev
```


#### 4. Start the application
```shell
sh start.sh
```


#### 5. Check that the logs are OK and the upgrade is complete
```shell
tail -f /opt/sqldev/run.log
```







