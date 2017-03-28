An instance is what logically links your server to Umbreo. It's attached to one [blueprint](/core-concepts/blueprints) that describes its role (e.g : Apache Web Server)

There are 3 types of instances, we will cover how to run each type and how to link your server with your instance.

<br />

### Manually Provisioned Instances
The type of instances that are connected to Umbreo directly. It can be your virtual machine or any of your bare-bone servers.

[Read more](/automating-deployments/manually-provisioned/)

-----
### Auto Provisioned Instances
The type of instances that are connected to Umbreo through one of the available cloud providers like AWS and Digital Ocean.

In addition to configuring these servers, Umbreo offers you the ability to create and run your servers in these clouds first using their APIs and then configure them using Umbreo.

[Read more](/automating-deployments/auto-provisioned/)

-----
### Umbreo Online Instances
These instances are hosted and managed by Umbreo using <a href="https://www.docker.com" target="_blank">Docker</a>. They are useful for all kind of tests and experimentation purposes.

For example you can use Umbero Instances if you want to try a particular blueprint customization before deploying it into your infrastructure, or if you just want to get familiar with Umbreo.

[Read more](/automating-deployments/test-instance/)

-----
You can start by making your first instance by following this tutorial [Launch your first instance](/getting-started/launch-first-instance)

Read more about Blueprints [here](/core-concepts/blueprints).

