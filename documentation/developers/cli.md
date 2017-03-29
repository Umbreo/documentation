<!-- # List Umbreo Command CLI -->
### We have 2 ways to call action command:

* command-suite
* command-form

### Wiki Umbreo Command CLI

1. [Endpoint Configuration](#1-endpoint-configuration)
2. [Authentication](#2-authentication)
    * [Login](#login)
    * [Logout](#logout)
3. [Instance](#3-instance)
    * [List or filter](#list-or-filter)
    * [Search](#search)
    * [Show detail](#show-detail)
    * [Deploy Blueprint](#deploy-blueprint)
4. [Module](#4-module)
    * [List](#list)
    * [Search](#search-1)
5. [Profile](#5-profile)
    * [List](#list-1)
    * [Search](#search-2)
6. [System](#6-system)
    * [List](#list-2)
7. [Blueprint](#7-blueprint)
    * [List or filter](#list-or-filter-1)
    * [Search](#search-3)
    * [Show detail](#show-detail-1)
    * [Delete my custom blueprint](#delete-my-custom-blueprint)
    * [Create custom blueprint](#create-custom-blueprint)
    * [Deploy blueprint](#deploy-blueprint)
    * [Export blueprint json](#export-blueprint-json)
    * [Validate blueprint json](#validate-blueprint-json)
8. [Stack Template](#8-stack-template)
    * [List or filter](#list-or-filter-2)
    * [Search](#search-4)
    * [Show detail](#show-detail-2)
    * [Export stack template json](#export-stack-template-json)
    * [Export blueprints of stack template json](#export-blueprinst-of-stack-template-json)
9. [Stack](#9-stack)
    * [List](#list-3)
    * [Search](#search-5)
    * [Show detail](#show-detail-3)
    * [Create stack](#create-stack)
10. [Cloud Provider](#10-cloud-provider)
    * [List](#list-4)
    * [Export cloud provider json](#export-cloud-provider-json)
    * [Validate cloud provider json](#validate-cloud-provider-json)
11. [Provider](#11-provider)
    * [List or filter](#list-or-filter-3)
    * [Search](#search-6)
    * [Show detail](#show-detail-4)
    * [Create provider](#create-provider)
    * [Get Data Credential](#get-data-credential)
12. [Service Provider](#12-service-provider)
    * [List or filter](#list-or-filter-4)
    * [Search](#search-7)
    * [Show detail](#show-detail-5)
    * [Export service provider json](#export-service-provider-json)
    * [Validate service provider json](#validate-service-provider-json)
13. [Service](#13-service)
    * [List or filter](#list-or-filter-5)
    * [Search](#search-8)
    * [Show detail](#show-detail-6)
    * [Create Service](#create-service)
    * [Export service json](#export-service-json)
    * [Validate service json](#validate-service-json)

<br />

Getting Started 
====================
This guide will help you to setup and run CLI
<br />
### Step1: install bundler
```ruby
$ gem install bundler
```
### Step2: Run bundle install
```console
$ bundle install
```

<br />
-------------

How to Run CLI
====================
You can simply go run this command
#### For first time
```console
$ bundle exec bin/umbreo [command] [arg]
```

#### For secondtime
```console
$ umbreo [command] [arg]
```

<br />

Below are current lists command on CLI
====================

<br />
-------------

### 1. Endpoint Configuration

We can switch host endpoint for development mode

#### command-suite
```console
$ umbreo endpoint configure --url endpoint_url
```
```console
$ umbreo endpoint configure --url https://beta.umbreo.com
```
#### command-form
```console
$ umbreo endpoint configure
$ Enter your Endpoint (URL): https://beta.umbreo.com
```

<br />
-------------

### 2. Authentication

### Login

File Credential will be created on ~/.umbreoconfig file

#### command-suite
```console
$ umbreo login --email your_email --password your_password
```
```console
$ umbreo login --email foo@umbreo.com --password foobar
```

#### command-form
```console
$ umbreo endpoint login

Enter your Umbreo credentials.
$ Email: foobar@umbreo.com 
$ Password (Typing will be hidden):
```

### Logout
```console
$ umbreo logout
Local credentials cleared.
```

<br />
-------------------------

### 3. Instance

### List or filter

#### command-suite
```console
$ umbreo instance list --register_type |all|registered|unregistered| --type |all|test|manual|provider| --cloud |aws|gcompute|docean|openstack|XenServer| --page |number_of_page|
```
```console
$ umbreo instance list --register_type all --type test --cloud aws --page 2
```

#### command-form
```console
$ umbreo instance list

1. all
2. registered
3. unregistered
$ Please choose filter of register type? all

1. all
2. test
3. manual
4. provider
$ Please choose filter of instance deployment type? test
```

### Search

#### command-suite
```console
$ umbreo instance search --keyword |search_keyword| --register_type |all|registered|unregistered| --type |all|test|manual|provider| --cloud |aws|gcompute|docean|openstack|XenServer| --page |number_of_page|
```
```console
$ umbreo instance search --keyword 'Foo Instance' --register_type all --type test --cloud aws
```

#### command-form
```console
$ umbreo instance search

1. all
2. registered
3. unregistered
$ Please choose filter of register type? all

1. all
2. test
3. manual
4. provider
$ Please choose filter of instance deployment type? test

$ Search keyword: Foo Instance
```

### Show detail

#### command-suite
```console
$ umbreo instance show --id |id_or_name|
```
```console
$ umbreo instance show --id 'foo instance'
```

#### command-form
```console
$ umbreo instance show
$ Name or ID of Instance: foo instance
```

### Deploy Blueprint

#### command-suite
```console
$ umbreo instance deploy --custom |optional_to_get_custom_or_umbreo_blueprints| --name |name_of_instance| --desc |desc_of_instance| --blueprint |directory_blueprint_json_file| --service_logging |directory_my_service_logging_json_file| --service_monitoring |directory_service_monitoring_json_file| --service_backup |directory_service_backup_json_file| --type |test|manual|provider| --provider |directory_my_provider_json_file|
```
```console
$ umbreo instance deploy --name 'Foo Instance' --desc 'My first instance' --type provider --blueprint apache_webserver_with_php.json --provider digital_ocean_provider.json --service_backup baculaexternal.json
```

#### command-form
```console
$ umbreo instance deploy --custom

$ Name of new instance: Foo Instance
$ Description of new instance: My First instance
$ Blueprint directory File JSON: custom_apache_webserver_with_php.json
$ Service logging directory File JSON (optional): 
$ Service monitoring directory File JSON (optional): 
$ Service backup directory File JSON (optional): 

1. test
2. manual
3. provider
$ Please choose deployment type? 1

```

<br />

### 4. Module

All command that's associated to Module

### List

#### command-suite
```console
$ umbreo module list --page |number_of_page|
```
```console
$ umbreo module list
```

### Search

#### command-suite
```console
$ umbreo module search --keyword |search_keyword| --page |number_of_page|
```
```console
$ umbreo module search --keyword php
```

<br />

### 5. Profile

All command that's associated to Profile

### List

#### command-suite
```console
$ umbreo profile list --page |number_of_page|
```
```console
$ umbreo profile list
```

### Search

#### command-suite
```console
$ umbreo profile search --keyword |search_keyword| --page |number_of_page|
```
```console
$ umbreo profile search --keyword rails
```

<br />

### 6. System

### List

#### command-suite
```console
$ umbreo system list
```

<br />

### 7. Blueprint

All command that's associated to Blueprint

### List or filter

#### command-suite
```console
$ umbreo blueprint list --custom |optional_to_get_custom_or_umbreo_blueprints| --os |all|linux|windows| --page |number_of_page|
```
```console
$ umbreo blueprint list --os all
```

#### command-form
```console
$ umbreo blueprint list

1. all
2. linux
3. windows
$ Please choose filter of instance provider? all
```

### Search

#### command-suite
```console
$ umbreo blueprint search --keyword |search_keyword| --custom |optional_to_get_custom_or_umbreo_blueprints| --os |all|linux|windows| --page |number_of_page|
```
```console
$ umbreo blueprint search --keyword 'lamp server' --os all
```

#### command-form
```console
$ umbreo blueprint search

1. all
2. linux
3. windows
$ Please choose filter of instance provider? all

$ Search keyword: lamp server
```

### Show detail

#### command-suite
```console
$ umbreo blueprint show --id |id_or_slug| --custom |optional_to_get_custom_or_umbreo_blueprints|
```
```console
$ umbreo blueprint show --id lamp-server
```

#### command-form
```console
$ umbreo blueprint show
$ ID or Slug of blueprint: lamp-server
```

#### output
```console
ID: 3
Name: LAMP Server
Description: 
OS: linux
```

### Delete my custom blueprint

Delete bluprient can bse used if a custom blueprint didn't have instance.

#### command-suite
```console
$ umbreo delete --id |id_or_slug|
```
```console
$ umbreo delete --id foo-blueprint
```

#### command-form
```console
$ umbreo blueprint delete
Id or Slug Custom Blueprint: foo-blueprint
```

### Create custom blueprint

#### command-suite
```console
$ umbreo blueprint create --name |name_blueprint| --operating_system |linux|windows| --system |name_ofsystem| --profile |profiles|
```
```console
$ umbreo blueprint create --name 'foo blueprint' --operating_system linux --system 'Ubuntu 12.04' --profile 'Ruby, Postgresql'
```

#### command-form
```console
$ umbreo blueprint create

$ Name of blueprint: Foo Blueprint

1. linux
2. windows
$ Please choose your blueprint operating system? linux

$ Description: My first blueprint

1. Ubuntu
2. CentOS
3. Fedora
4. Ubuntu 12.04
5. Ubuntu 14.04
6. CentOS 5
7. CentOS 6
8. CentOS 7
9. Fedora 19
10. Fedora 20
11. Ubuntu 10.04
12. Windows
$ Please choose your blueprint system? Ubuntu 10.04

$ Add profiles (call list_profiles to show profiles) eg: 'Ruby, Postgresql': Ruby, Postgresql
```

### Deploy blueprint

### Export blueprint json

#### command-suite
```console
$ umbreo blueprint export --custom |optional_to_get_custom_or_umbreo_blueprints| --id |id_or_name_of_blueprint|
```
```console
$ umbreo blueprint export --custom --id 'foo-blueprint'
```

#### command-form
```console
$ umbreo blueprint export --custom
ID or Slug of Blueprint: foo-blueprint
```

### Validate blueprint json

#### command-suite
```console
$ umbreo blueprint valid --file |directory_of_json_file|
```
```console
$ umbreo blueprint valid --file foo_blueprint.json
```

#### command-form
```console
$ umbreo blueprint validate
$ Directory of Blueprint: foo_blueprint.json
```

<br />

### 8. Stack Template

All command that's associated to Stack Template

### List or filter

#### command-suite
```console
$ umbreo stack_template list
```

### Search

#### command-suite
```console
$ umbreo stack_template search --keyword |search_keyword|
```
```console
$ umbreo stack_template search --keyword php
```

#### command-form
```console
$ umbreo stack_template search
$ Keyword of Stack Template: php
```

### Show detail

#### command-suite
```console
$ umbreo stack_template show --id |id_or_name|
```
```console
$ umbreo stack_template show --id 'Load Balanced Lamp Server'
```

#### command-form
```console
$ umbreo stack_template show
$ Name or id of Stack Template: Load Balanced Lamp Server
```

### Export stack template json

#### command-suite
```console
$ umbreo stack_template export --id |id_or_name_of_blueprint|
```
```console
$ umbreo stack_template export --id 'Load Balanced Lamp Server'
```

#### command-form
```console
$ umbreo stack_template export
Name or ID of Stack Template: Load Balanced Lamp Server
```

### Export blueprints of stack template json

#### command-suite
```console
$ umbreo stack_template blueprint_export --id |id_or_name_of_blueprint|
```
```console
$ umbreo stack_template blueprint_export --id 'Load Balanced Lamp Server'
```

#### command-form
```console
$ umbreo stack_template blueprint_export
Name or ID of Stack Template: Load Balanced Lamp Server
```

<br />

### 9. Stack

All command that's associated to Stack

### List

#### command-suite
```console
$ umbreo stack list
```

### Search

#### command-suite
```console
$ umbreo stack search --keyword |search_keyword|
```
```console
$ umbreo stack search --keyword 'Stack One'
```

#### command-form
```console
$ umbreo stack search
$ Keyword of Stack: one
```

### Show detail

#### command-suite
```console
$ umbreo stack show --id |id_or_name_stack|
```
```console
$ umbreo stack show --id 'Foo Stack'
```

#### command-form
```console
$ umbreo stack show
$ Name or ID of Stack: Foo Stack
```

### Create stack

```console
$ umbreo stack create --id |id_or_name_stack_template| --name |name_of_stack| --desc |desc_of_stack|
```
```console
$ umbreo stack create --id 1 --name 'Foo Stack' --desc 'My first Foo Stack'

1. yes
2. no
$ Will you add Nginx Webserver? yes
$ Description of new instance: My first node stack
$ Blueprint directory File JSON: /Users/foo/Documents/json/nginx_webserver.json
$ Service logging directory File JSON (optional): 
$ Service monitoring directory File JSON (optional): 
$ Service backup directory File JSON (optional): 

1. test
2. manual
3. provider
$ Please choose deployment type? 3
$ Compute provider directory File JSON: /Users/foo/Documents/json/digital_ocean_provider.json
```

<br />

### 10. Cloud Provider

All command that's associated to Stack

### List

#### command-suite
```console
$ umbreo cloud_provider list
```

### Export cloud provider json

#### command-suite
```console
$ umbreo cloud_provider export --id |id_or_slug_of_cloud_provider|
```
```console
$ umbreo cloud_provider export --id aws
```

#### command-form
```console
$ umbreo cloud_provider export
$ ID or Slug of Cloud Provider: aws
```

### Validate cloud provider json

#### command-suite
```console
$ umbreo cloud_provider valid --file |directory_of_json_file|
```
```console
$ umbreo cloud_provider valid --file amazon_web_services(aws).json
```

#### command-form
```console
$ umbreo blueprint validate
$ Directory File JSON: amazon_web_services(aws).json
```

<br />

### 11. Provider

### List or filter

#### command-suite
```console
$ umbreo provider list --cloud |slug_cloud_provider| --page |number_of_page|
```
```console
$ umbreo provider list --cloud all --page 2
```

#### command-form
```console
$ umbreo provider list --page 2

1. all
2. aws
3. gcompute
4. docean
5. openstack
6. XenServer
$ Please choose Cloud Provider filter? all
```

### Search

#### command-suite
```console
$ umbreo provider search --cloud |slug_cloud_provider| --keyword |search_keyword| --page |number_of_page|
```
```console
$ umbreo provider search --cloud docean --keyword foo
```

#### command-form
```console
$ umbreo provider search

1. all
2. aws
3. gcompute
4. docean
5. openstack
6. XenServer
$ Please choose Cloud Provider filter? docean

$ Search keyword: FooPro1
```

### Show detail

#### command-suite
```console
$ umbreo provider show --id |id_or_name|
```
```console
$ umbreo provider show --id 'FooPro1'
```

#### command-form
```console
$ umbreo provider show
$ Name or ID of Provider: FooPro1
```

### Create provider

For create provider, we have to export cloud provider json first

#### command-suite
```console
 $ umbreo provider:create |aws|gcompute|docean|openstack|xenserver| --file |directory_of_json_file| --name |provider_name| --desc |provider_description|
```
```console
 $ umbreo provider:create digital_ocean --file digital_ocean.json --name 'Foo Instance'
```

#### command-form
```console
$ umbreo cloud_provider:create digital_ocean 
$ Provider Name: Foo Instance
$ Description (optional): test
$ Directory of File: digital_ocean.json
```

### Get Data Credential

For create instance, we need data credential from if we choose provider as deployment type

#### Digital Ocean

Get Images for Digital Ocean Provider

```console
$ umbreo provider:digital_ocean images --id |id_or_name_provider|
```
```console
$ umbreo provider:digital_ocean images --id 'Foo Provider'
```

Get Flavors for Digital Ocean Provider

```console
$ umbreo provider:digital_ocean flavors --id |id_or_name_provider| --image |id_image_digital_ocean_provider|
```
```console
$ umbreo provider:digital_ocean flavors --id 'Foo Provider' --image 18830380
```

Get Regions for Digital Ocean Provider

```console
$ umbreo provider:digital_ocean regions --id |id_or_name_provider| --image |id_image_digital_ocean_provider|
```
```console
$ umbreo provider:digital_ocean regions --id 'Foo Provider' --image 18830380
```

Get Compute Params JSON file

```console
$ umbreo provider:digital_ocean export --id |id_or_name_provider|
```
```console
$ umbreo provider:digital_ocean export --id 'Foo Provider'
```

Check valid Compute Params JSON file

```console
$ umbreo provider:digital_ocean valid --file |directory_of_json_file|
```
```console
$ umbreo provider:digital_ocean valid --file digital_ocean_compute_params.json
```

#### Openstack

Get Zone for Openstack

```console
$ umbreo provider:openstack zones --id |id_or_name_provider|
```
```console
$ umbreo provider:openstack zones --id 'Openstack Foo Provider'
```

Get Flavor for Openstack

```console
$ umbreo provider:openstack flavors --id |id_or_name_provider|
```
```console
$ umbreo provider:openstack flavors --id 'Openstack Foo Provider'
```

Get Image for Openstack

```console
$ umbreo provider:openstack images --id |id_or_name_provider|
```
```console
$ umbreo provider:openstack images --id 'Openstack Foo Provider'
```

Get Group for Openstack

```console
$ umbreo provider:openstack groups --id |id_or_name_provider|
```
```console
$ umbreo provider:openstack groups --id 'Openstack Foo Provider'
```

Get Keypair for Openstack

```console
$ umbreo provider:openstack keypairs --id |id_or_name_provider|
```
```console
$ umbreo provider:openstack keypairs --id 'Openstack Foo Provider'
```

Get Export for Openstack

```console
$ umbreo provider:openstack export --id |id_or_name_provider|
```
```console
$ umbreo provider:openstack export --id 'Openstack Foo Provider'
```

Get Validate for Openstack

```console
$ umbreo provider:openstack valid --file |directory_of_json_file|
```
```console
$ umbreo provider:openstack valid --file openstack_provider.json
```

#### Google Cloud Engine

Get Image for Google Compute Engine

```console
$ umbreo provider:google_ce images --id |id_or_name_provider|
```
```console
$ umbreo provider:google_ce images --id 'GCE Foo Provider'
```

Get Region for Google Compute Engine

```console
$ umbreo provider:google_ce regions --id |id_or_name_provider|
```
```console
$ umbreo provider:google_ce regions --id 'GCE Foo Provider'
```

Get Machine for Google Compute Engine

```console
$ umbreo provider:google_ce machines --id |id_or_name_provider|
```
```console
$ umbreo provider:google_ce machines --id 'GCE Foo Provider'
```

Get Network for Google Compute Engine

```console
$ umbreo provider:google_ce networks --id |id_or_name_provider|
```
```console
$ umbreo provider:google_ce networks --id 'GCE Foo Provider'
```

Get Export for Google Compute Engine

```console
$ umbreo provider:google_ce export --id |id_or_name_provider|
```
```console
$ umbreo provider:google_ce export --id 'GCE Foo Provider'
```

Get Validate for Google Compute Engine

```console
$ umbreo provider:google_ce valid --file |directory_of_json_file|
```
```console
$ umbreo provider:google_ce valid --file google_compute_engine_service_provider.json
```

#### Amazon Web Service

Get Images for AWS Provider

```console
$ umbreo provider:amazon_web_service images --id |id_or_name_provider|
```
```console
$ umbreo provider:amazon_web_service images --id 'AWS Foo Provider'
```

Get Size Storage for AWS Provider

```console
$ umbreo provider:amazon_web_service sizes --id |id_or_name_provider|
```
```console
$ umbreo provider:amazon_web_service sizes --id 'AWS Foo Provider'
```

Get Region for AWS Provider

```console
$ umbreo provider:amazon_web_service regions --id |id_or_name_provider|
```
```console
$ umbreo provider:amazon_web_service regions --id 'AWS Foo Provider'
```

Get Keypair for AWS Provider

```console
$ umbreo provider:amazon_web_service keypairs --id |id_or_name_provider|
```
```console
$ umbreo provider:amazon_web_service keypairs --id 'AWS Foo Provider'
```

Get Security Group for AWS Provider

```console
$ umbreo provider:amazon_web_service security_groups --id |id_or_name_provider|
```
```console
$ umbreo provider:amazon_web_service security_groups --id 'AWS Foo Provider'
```

Get Compute Params JSON file

```console
$ umbreo provider:amazon_web_service export --id |id_or_name_provider|
```
```console
$ umbreo provider:amazon_web_service export --id 'AWS Foo Provider'
```

Check valid Compute Params JSON file

```console
$ umbreo provider:amazon_web_service valid --file |directory_of_json_file|
```
```console
$ umbreo provider:amazon_web_service valid --file amazon_web_service_compute_params.json
```

<br />

### 12. Service Provider

### List or filter

#### command-suite
```console
$ umbreo service_provider list --type |all|logging|monitoring|backup| --resource |all|master|client| --page |number_of_page|
```
```console
$ umbreo service_provider list --type all --resource all
```

#### command-form
```console
$ umbreo service_provider list

1. all
2. logging
3. monitoring
4. backup
$ Please choose filter of service provider type? all

1. all
2. master
3. client
$ Please choose filter of resource? all
```

### Search

#### command-suite
```console
$ umbreo service_provider search --keyword |search_keyword| --type |all|logging|monitoring|backup| --resource |all|master|client| --page |number_of_page|
```
```console
$ umbreo service_provider search --keyword bacula --type all --resource all
```

#### command-form
```console
$ umbreo service_provider search

1. all
2. logging
3. monitoring
4. backup
$ Please choose filter of service provider type? all

1. all
2. master
3. client
$ Please choose filter of resource? all

$ Search Keyword: bacula
```

### Show detail

#### command-suite
```console
$ umbreo service_provider show --id |id_or_name|
```
```console
$ umbreo service_provider show --id baculaserver
```

#### command-form
```console
$ umbreo cloud_provider show
$ Name or ID of Service Provider: baculaserver
```

### Export service provider json

#### command-suite
```console
$ umbreo service_provider export --id |id_or_name|
```
```console
$ umbreo service_provider export --id baculaserver
```

#### command-form
```console
$ umbreo cloud_provider export
$ Name or ID of Service provider: baculaserver
```

### Validate service provider json

#### command-suite
```console
$ umbreo service_provider valid --file |directory_of_json_file|
```
```console
$ umbreo service_provider valid --file baculaserver.json
```

#### command-form
```console
$ umbreo service_provider validate
$ Directory of Service Provider: baculaserver.json
```

#### output
```console
Validate passed. You can deploy now
```

<br />

### 13. Service

All command that's associated to Service

### List or filter

#### command-suite
```console
$ umbreo service list --state |all|active|nonactive| --type |optional_id_or_slug_service_provider| --page |number_of_page|
```
```console
$ umbreo service list --state all --type baculaserver
```

#### command-form
```console
$ umbreo service list

1. all
2. active
3. unactive
$ Please choose filter of state service? all

$ ID or Slug of Service provider: baculaserver
```

### Search

#### command-suite
```console
$ umbreo service search --keyword |search_keyword| --state |all|active|nonactive| --type |optional_id_or_slug_service_provider| --page |number_of_page|
```
```console
$ umbreo service search --keyword 'BaculaExternal' --state all --type baculaserver
```

#### command-form
```console
$ umbreo service search

1. all
2. active
3. unactive
$ Please choose filter of state service? 1

$ ID or Slug of Service provider: baculaserver

$ Search keyword: BaculaExternal
```

### Show detail

#### command-suite
```console
$ umbreo service show --id |id_or_name|
```
```console
$ umbreo service show --id 'BaculaExternal'
```

#### command-form
```console
$ umbreo service show
$ Name or ID of Service: BaculaExternal
```

#### output
```console
ID: 1
Name: BaculaExternal
Service Provider: baculaserver
Link type: external
Active: Yes
Description: My first Bacula
```

### Create Service

#### command
```console
$ umbreo service create --external |optional_to_choose_external| --file |directory_of_json_file| --id |service_template_id_or_slug| --name |name_of_service| --desc |description_for_service|
```
```console
$ umbreo service create --external --file baculaclient.json --id bacula --name 'Foo Service' --desc 'My first foo service'
```

### Export service json

#### command-suite
```console
$ umbreo service export --id |id_or_name|
```
```console
$ umbreo service export --id 'BaculaExternal'
```

#### command-form
```console
$ umbreo service export
$ Name or ID of Service: BaculaExternal
```

### Validate service json

#### command-suite
```console
$ umbreo service valid --file |directory_of_json_file|
```
```console
$ umbreo service valid --file baculaexternal.json
```

#### command-form
```console
$ umbreo service validate
$ Directory of Service Provider: baculaexternal.json
```

#### output
```console
Validate passed. You can deploy now
```

# Help Command To Get Started
### For some reason you might be confuse to get started with CLI, you can simply run this command to get help
```console
umbreo help
```

