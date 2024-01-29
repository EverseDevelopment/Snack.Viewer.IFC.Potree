# IFC & Point cloud viewer

[<img src="https://s3.amazonaws.com/everse.assets/GithubReadme/IFCPotree.png" width="443" height="209">](https://github.com/EverseDevelopment/Viewer.IFC.Potree.Snack/wiki)
<br/>

# Demo
[Live demo](https://ifcpointcloud.e-verse.com/)

# About
Sample based on [Potree](https://github.com/potree/potree) and the IFCLoader from [threejs](https://github.com/mrdoob/three.js). 

# Getting Started

### Install on your PC

Install [node.js](http://nodejs.org/)

Install dependencies, as specified in package.json, and create a build in ./build/potree.

```bash
npm install
```

### Run on your PC

Use the `npm start` command to 

* create ./build/potree 
* watch for changes to the source code and automatically create a new build on change
* start a web server at localhost:3000. 

Go to http://localhost:3000/examples/ to test the examples.

### Deploy to a server

* Simply upload the Potree folderm with all your point clouds, the build directory, and your html files to a web server.
* It is not required to install node.js on your webserver. All you need is to host your files online. 

### Convert Point Clouds to Potree Format

Download [PotreeConverter](https://github.com/potree/PotreeConverter) and run it like this:

    ./PotreeConverter.exe C:/pointclouds/data.las -o C:/pointclouds/data_converted

Copy the converted directory into &lt;potreeDirectory&gt;/pointclouds/data_converted. Then, duplicate and rename one of the examples and modify the path in the html file to your own point cloud.


# Downloads

* [Potree](https://github.com/potree/potree/releases)
* [PotreeConverter ](https://github.com/potree/PotreeConverter/releases) - Convert your point cloud to the Potree format.
* [PotreeDesktop ](https://github.com/potree/PotreeDesktop/releases) - Desktop version of Potree. Allows drag&drop of point clouds into the viewer.

## About us ##

We are an international mix of AEC professionals, product designers, and software developers. We work together to transform construction requirements into accurate and partnership-driven technological solutions.

<p align="center" width="100%">
    <a href="https://www.e-verse.com/">
    <img src="https://s3.amazonaws.com/everse.assets/GithubReadme/e-verse_logo_no+slogan.jpg" align="center">
    </a>
</p>
