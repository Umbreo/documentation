The manually privisioned instances can be linked to your individual servers, bare-bone servers or virtual machines.

Once you assign a blueprint to your instance, you will have to run a `curl` command line in your server's terminal in order to provision your server with the selected blueprint.

You can also use this type of instance to try out blueprints in a virtual machine that you have locally.

<br />

### Getting Started

1. To start with your first manually provisioned instance go to your **[Instances](https://beta.umbreo.com/instances)** page > **New Instance**. Or you can directly click **deploy** on a blueprint in the **[Blueprints](https://beta.umbreo.com/blueprints)** page. 

2. Then you have to fill the form with the name and description of your instance, select a blueprint that you want to deploy in your instance, and finally choose **Manually Provisioned** as a type of the instance.

3. If everything goes well you will be redirected to your new instance's page. There you will need to proceed by confirming your instance. To do that click **Confirm your instance** button and then copy the curl command.

4. On your server's terminal, paste the command line and run it to provision the server with the selected blueprint.