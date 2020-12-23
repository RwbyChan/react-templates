const fs = require('fs');
const log = require('fancylog')
const { component, style, service, model } = require('./templates.js');
const { exit } = require('process');

var types = ["component", "c", "service", "s", "model", "m"];

var type = process.argv[2];
var name = process.argv[3];

if(type == "c") type = "component";
if(type == "s") type = "service";

if(!types.includes(type)) {
  log.error('Invalid type, available types: ' + types.join(', '));
  exit();
}

function writeFileErrorHandler(err) {
    if (err) throw err;
}

if(type == "component" || type == "c") {
  var main_dir = './src/components';
  // check if components dir exists, else make
  if(!fs.existsSync(main_dir)) {
    fs.mkdirSync(main_dir);
  }

  // throw an error if the file already exists
  if (fs.existsSync(`${main_dir}/${name}`)) {
    log.error(`A ${type} with that name already exists.`);
    exit();
  }

  // create the folder
  fs.mkdirSync(`${main_dir}/${name}`);

  // component.js
  fs.writeFile(`${main_dir}/${name}/${name}.js`, component(name), writeFileErrorHandler);
  // component.css
  fs.writeFile(`${main_dir}/${name}/${name}.css`, style(name), writeFileErrorHandler);

  // more?

  // done
  log.info(`Created ${type} for ${name}`);
  exit();
}

if(type == "service" || type == "s") {
  var main_dir = './src/services';
  // check if services dir exists, else make
  if(!fs.existsSync(main_dir)) {
    fs.mkdirSync(main_dir);
  }

  // throw an error if the file already exists
  if (fs.existsSync(`${main_dir}/${name}.service.js`)) {
    log.error(`A ${type} with that name already exists.`);
    exit();
  } 

  // service.js
  fs.writeFile(`${main_dir}/${name}.service.js`, service(name), writeFileErrorHandler);

  // done
  log.info(`Created ${type} for ${name}`);
  exit();
}

if(type == "model" || type == "m") {
  var main_dir = './src/models';
  // check if models dir exists, else make
  if(!fs.existsSync(main_dir)) {
    fs.mkdirSync(main_dir);
  }

  // throw an error if the file already exists
  if (fs.existsSync(`${main_dir}/${name}.model.js`)) {
    log.error(`A ${type} with that name already exists.`);
    exit();
  } 

  // service.js
  fs.writeFile(`${main_dir}/${name}.model.js`, model(name), writeFileErrorHandler);

  // done
  log.info(`Created ${type} for ${name}`);
  exit();
}