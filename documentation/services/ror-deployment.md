### Getting Started
In this tutorial, we gonna learn how to deploy a Ruby on Rails app using Jenkins and Capistrano using the free version of [**Umbreo**](https://www.umbreo.com/signup).

**Requirements:**

- Ruby on Rails app hosted in a code repository
- Understanding Deployment Types in Umbreo

## **Setting up the CI Server**

Log into your Umbreo dashboard and open your [**Services**](https://www.umbreo.com/user_services) page and start deploying a service by clicking on "Deploy Service" Button.

<br>
Choose **Continous Integration** Service category.
<!-- <center><img src="../../img/deploy-service-button.png" ></center> -->
<center><img src="../../img/make-ci-service-1.png" ></center>

<br>
Choose **Ruby on Rails deployment** Service.
<center><img src="../../img/make-ci-service-2.png" ></center>

<br>
Fill the form with the appropriate information.
<center><img src="../../img/make-ci-service-3.png" ></center>

<br>
Choose a deployment type. Read more about types of deployments here.
<center><img src="../../img/make-ci-service-4.png" ></center>

<br>
Go back to your Services page and make sure your service is ready.
<center><img src="../../img/make-ci-service-5.png" ></center>

<br>
Deploy your service on a server.
<!-- <center><img src="../../img/make-ci-service-5.png" ></center> -->

---------

## **Setting up the Rails server**

Log into your Umbreo dashboard and open your [**Instances**](https://www.umbreo.com/instances) page and start creating an instance by clicking on "New Instance" Button.

<br>
Fill the form with the appropriate information.
<center><img src="../../img/create-rails-instance-1.png" ></center>

<br>
Choose a deployment type. Read more about types of deployments here.
<center><img src="../../img/create-rails-instance-2.png" ></center>

<br>
Enable **Continuous Integration** and select the service you just created.
<center><img src="../../img/create-rails-instance-3.png" ></center>

<br>
You can adjust the parameters of the service you created before. And then confirm by clicking "Create Instance" Button.
<center><img src="../../img/create-rails-instance-5.png" ></center>

<br>
Deploy your instance on a server and you're all set!
<!-- <center><img src="../../img/make-ci-service-5.png" ></center> -->



