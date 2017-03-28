*The tutorial assumes that you already created an account and you're logged in to the Umbreo Dashboard. you will need also a valid AWS account.*

*Also for demonstration purposes we'll be deploying the **Docker** blueprint, but Umbreo has more than a dozen handcrafted, ready to use [Blueprints](/core-concepts/blueprints) so you can quickly and easily get started.*

### 1. Connect Cloud Provider

First, we need to create a new provider, so make sure you're on the [Providers](https://beta.umbreo.com/providers) page.

<center>
<img src="../../img/new-provider.png" width="600" >
</center>

Since we'll be using AWS EC2, Click on the **Add** button on the card representing <b>Amazon Web Services</b> (as shown in the screenshot below).

<center>
<img src="../../img/new-provider-2.png" width="600" >
</center>

A form will appear, where you can give a name for your that provider (optionally, you can add a description too), also make sure to enter valid AWS API keys. Finally click **Save** to move to the next step.

<center><img src="/attachment/40133202-9f90-4960-88bc-4fb6d726fa99/3.png" width="600" height="300" ></center>

If AWS API keys were correct, your new provider should appear in the provider list and have state *Available*.

<center><img src="/attachment/f0a78c62-8420-49f6-8794-3ef93f3a3e0f/4.png" width="600" ></center>

### 2. Deploy Blueprint

Now that we've connected a **Cloud Provider**, it's time to deploy a Blueprint. 

To do so, let's go to the [Blueprints](https://beta.umbreo.com/blueprints) page and click  the **Deploy** button on the card representing Docker.

<center>
<img src="/attachment/0e4b234b-1515-4c4e-9ffe-e626ad756c5c/5.png" width="600" >
</center>

A form will appear asking you to give a unique name to the instance (which we'll be automatically created for you in just a minute), make sure you select the **Auto provisioned** option, choose the provider we created in the previous step, and then click the **Done** button. 



<center>
<img src="/attachment/89536387-c781-4ea4-b1ff-5a27b50f7ad5/6.png" width="600" height="300" ></center>

### 3. Launch Instance 

On the next screen click **Launch Instance**.

An EC2 instance we'll be automatically provisioned on your behalf and configured with the Blueprint we chose in the previous steps. (In this how-to guide we chose to deploy Docker). 

Give it few minutes and your server instance we'll be ready for showtime! 