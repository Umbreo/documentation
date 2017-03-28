The Umbreo online instances are the type of instances running in the Umbreo's cloud, they are powered by [Docker](https://www.docker.com/).

Once you assign a blueprint to your instance, you will have a terminal in the browser pointing to your temporary Docker Container, the purpose of the Umbreo online instances is to let you try and do experimentations and tests of blueprints before you deploy them directly in your real servers.

The moment you run a new Umbreo online instance, you will have 1 hour before the container will get destroyed. But before that you will have the possibility to commit the Docker image and download it.

<br />

### Getting Started

1. To start with your first Umbreo online instance go to your **[Instances](https://beta.umbreo.com/instances)** page > **New Instance**. Or you can directly click **deploy** on a blueprint in the **[Blueprints](https://beta.umbreo.com/blueprints)** page.

2. Then you have to fill the form with the name and description of your instance, select a blueprint that you want to deploy in your instance, and finally choose **Umbreo Online Instance** as a type of the instance.

3. If everything goes well you will be redirected to your new instance's page. You will see there a terminal right in your browser (sometimes it can take several minutes before you can see your terminal working). Login with username `root` and password `root`.

4. Run the curl command line inside the terminal to provision the container with the selected blueprint.