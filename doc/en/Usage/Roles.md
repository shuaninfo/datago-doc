# Roles

The role here, which is the role in the project, requires administrator status, go to project management and select menu [Permissions-->Permissions Settings].



##### 1. Go to role setting

![image-20210817132755887](./img/role1.png)

##### 2. Create roles

Create a role in the project role settings

![image-20210817133031348](./img/role2.png)
<center>Image: Create role image</center>







##### 3. Role association/removal of users

Click the user icon of the role to associate the user to the role in the popup window

![image-20210817133322598](./img/role3.png)
<center>Figure: Role association/removal of users figure</center>



##### 4. Role association/removal of data source

Click the role's database icon to associate the database to the current role in a popup window.

![image-20210817133922906](./img/role4.png)
<center>Figure: Role association/removal data source diagram</center>



##### 5. Role permission settings
Click the role name to expand the list of data sources associated with the current role, and click the corresponding data source to set read-only (DQL), read-write (DML), and administrative (DDL) permissions for libraries and tables.

![image-20210817134355068](./img/role5.png)
<center>Figure: Role permissions diagram</center>


##### 5. Field desensitization settings

Click the role to expand the data source associated with the current role, select "Sensitive" on the corresponding field, select the desensitization method in the popup window and click the button to submit.

Select the desensitization method in the pop-up window and click the button to submit. [image-20210817134512969](./img/role6.png)
<center>Figure: Field desensitization diagram</center>

After setting up, cut back to the query page and check the query results, the fields have been desensitized and displayed.

![image-20210817134805040](./img/role7.png)
<center>Figure: Query desensitization map</center>








