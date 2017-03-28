*The tutorial assumes that you have already created an account and you're logged in to the Umbreo Dashboard.*

*Also for demonstration purposes we'll be deploying the Jenkins CI blueprint, but Umbreo has more than a dozen handcrafted,ready to use **Blueprints** so you can quickly and easily get started in **3 easy steps**.*

<br>

### 1. Select a Blueprint

First, make sure you're on the [Blueprints](https://www.umbreo.com/blueprints) page.

Since we'll be deploy and take *Jenkins CI Server* as an example, Click on the **Deploy** button on Jenkins CI Server blueprint card.

<br>

<center><img src="../../img/launch-jenkins.png" ></center>

<br>
<br>

### 2. Describe your Instance 

Give a name to your new instance.

<center class="schema_explain"><img src="../../img/launch-1.png"></center>

<br>
<br>	

### 3. Configure your Instance

Once you are on the instance's page, you can configure directly your *Jenkins Server*  with the parameters you need.

<center class="schema_explain"><img src="../../img/launch-2.png" ></center>

<br>
<br>

### 4. Choose a Service (optional)

If you want to integrate a service like monitoring or logging, you can consider this section.

<center class="schema_explain"><img src="../../img/launch-3.png" ></center>

<br>
<br>

### 5. Type of instance

Choose the type of your instance, it's recommended to start with Manually Provisioned instance or Umbreo online instance to start.

<center class="schema_explain"><img src="../../img/launch-4.png" ></center>

<br>

### 6. Confirming your instance

Copy the cURL command to your clipboard and run it on your server.

<center class="schema_explain"><img src="../../img/deploy-jenkins-confirming.png" ></center>

<br/>

The command will connect your server first to the Umbreo Platform, then securely configure it with the Blueprint you chose in previous steps.
