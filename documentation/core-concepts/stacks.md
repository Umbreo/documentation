A Stack is a group of instances ready to get assigned by a group of blueprints respectively, thus it's a poweful way to get your instances working together.

The interesting feature behind using Stacks is the possibility to have [shared parameters](#shared-parameters) across the instances. It permits interaction between the instances.

Let's assume you want a Stack that you will deploy to your instances, and you want the following Blueprints to be assigned to 4 of your instances :
	
* Nginx Load Balancer x 1
* Apache Web Server with PHP x 2
* MySQL Database Server x 1

In this Use Case we need to have IPs addresses shared from the Apache Web Servers to the Nginx Load Balancer in order to have a Load Balancing up and running.
<br />
<br />

<center>
<img class="" src="../../img/stack-example.png" >
</center>

<br />
### Shared Parameters
Each Stack has its own configuratble rule of which ways parameters need to be shared between instances.

In the example above, the shared parameters are managed in a way that each Apache Web Server instance shares its IP Address with the Nginx LoadBalancer instance.

<br />
### What next ?
In the very soon, you will be able to define your own Stacks using our Umbreo CLI gem.
But this requires using Umbreo in your own server.

Read more about [Umbreo Endpoints](/developers/endpoints).

-----
You can visit the Umbreo [Stacks](https://beta.umbreo.com/stack_templates) page and start with your first Stack.