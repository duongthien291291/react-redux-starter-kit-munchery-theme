import React from 'react'
import {browserHistory} from 'react-router'
import '../assets/style.scss'
import 'three'
import 'tween'
import 'TrackballControls'
import 'CSS3DRenderer'
import data from '../../../../../data.json'


let strs = '';
let time = new Date();

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let self = this;
    var table = data.users;

    var camera, scene, renderer;
    var controls;
    var objects = [];
    var targets = {table: [], sphere: [], helix: [], grid: []};
    var tableTemp = [];
    init();
    animate();
    function init() {
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
      camera.position.z = 800;
      scene = new THREE.Scene();
      // table
      for (var i = 0; i < table.length; i += 1) {
        var element = document.createElement('div');
        element.className = 'element';
        element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
        var number = document.createElement('div');
        number.className = 'number';
        number.textContent = table[i].id + 1;
        element.appendChild(number);
        var symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent = table[i].id;
        element.appendChild(symbol);
        var details = document.createElement('div');
        details.className = 'details';
        details.innerHTML = table[i].name + '<br>' + table[i].attendance;
        element.appendChild(details);

        //add click event to element
        elementClick(element, i);


        var object = new THREE.CSS3DObject(element);
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;
        scene.add(object);
        objects.push(object);
        //
        var object = new THREE.Object3D();
        object.position.x = ( table[i].col * 140 ) - 330;
        object.position.y = -( table[i].row * 180 ) + 660;
        targets.table.push(object);
        tableTemp.push($.extend(true, {}, object.position));
      }


      // sphere
      var vector = new THREE.Vector3();
      for (var i = 0, l = objects.length; i < l; i++) {
        var phi = Math.acos(-1 + ( 2 * i ) / l);
        var theta = Math.sqrt(l * Math.PI) * phi;
        var object = new THREE.Object3D();
        object.position.x = 800 * Math.cos(theta) * Math.sin(phi);
        object.position.y = 800 * Math.sin(theta) * Math.sin(phi);
        object.position.z = 800 * Math.cos(phi);
        vector.copy(object.position).multiplyScalar(2);
        object.lookAt(vector);
        targets.sphere.push(object);
      }

      // helix
      var vector = new THREE.Vector3();
      for (var i = 0, l = objects.length; i < l; i++) {
        var phi = i * 0.175 + Math.PI;
        var object = new THREE.Object3D();
        object.position.x = 900 * Math.sin(phi);
        object.position.y = -( i * 8 ) + 450;
        object.position.z = 900 * Math.cos(phi);
        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;
        object.lookAt(vector);
        targets.helix.push(object);
      }

      // grid
      for (var i = 0; i < objects.length; i++) {
        var object = new THREE.Object3D();
        object.position.x = ( ( i % 5 ) * 400 ) - 800;
        object.position.y = ( -( Math.floor(i / 5) % 5 ) * 400 ) + 800;
        object.position.z = ( Math.floor(i / 25) ) * 1000 - 2000;
        targets.grid.push(object);
      }

      //
      renderer = new THREE.CSS3DRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.domElement.style.position = 'absolute';
      document.getElementById('container').appendChild(renderer.domElement);
      //
      controls = new THREE.TrackballControls(camera, renderer.domElement);
      controls.rotateSpeed = 0.5;
      controls.addEventListener('change', render);
      var button = document.getElementById('table');
      button.addEventListener('click', function (event) {
        transform(targets.table, 1500);
      }, false);
      var button = document.getElementById('sphere');
      button.addEventListener('click', function (event) {
        transform(targets.sphere, 1500);
      }, false);
      var button = document.getElementById('helix');
      button.addEventListener('click', function (event) {
        transform(targets.helix, 1500);
      }, false);
      var button = document.getElementById('grid');
      button.addEventListener('click', function (event) {
        transform(targets.grid, 1500);
      }, false);
      var button = document.getElementById('back');
      button.addEventListener('click', function (event) {
        targets.table.forEach(function (obj, i) {
          obj.position.x = tableTemp[i].x;
          obj.position.y = tableTemp[i].y;
          obj.position.z = tableTemp[i].z;
          obj.scale.set(1, 1, 1);
        });
        transform(targets.table, 1000);
      }, false);
      transform(targets.table, 1500);
      //
      window.addEventListener('resize', onWindowResize, false);
    }

    function transform(targets, duration) {

      TWEEN.removeAll();
      for (var i = 0; i < objects.length; i++) {
        var object = objects[i];
        var target = targets[i];
        new TWEEN.Tween(object.position)
          .to({x: target.position.x, y: target.position.y, z: target.position.z}, Math.random() * duration + duration)
          .easing(TWEEN.Easing.Exponential.InOut)
          .start();
        new TWEEN.Tween(object.rotation)
          .to({x: target.rotation.x, y: target.rotation.y, z: target.rotation.z}, Math.random() * duration + duration)
          .easing(TWEEN.Easing.Exponential.InOut)
          .start();
        new TWEEN.Tween(object.scale)
          .to({x: target.scale.x, y: target.scale.y, z: target.scale.z}, Math.random() * duration + duration)
          .easing(TWEEN.Easing.Exponential.InOut)
          .start();
      }
      new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      render();
    }

    function animate() {
      requestAnimationFrame(animate);
      TWEEN.update();
      controls.update();
    }

    function render() {
      renderer.render(scene, camera);
    }

    function elementClick(element, index) {

      element.addEventListener('click', function () {

        self.props.updateUserInfo(data.users[index]);

        targets.table.forEach(function (obj, i) {
          obj.position.x = tableTemp[i].x;
          obj.position.y = tableTemp[i].y;
          obj.position.z = tableTemp[i].z;
        });
        var elementTemp = targets.table[index];
        elementTemp.position.x = 0;
        elementTemp.position.y = 0;
        elementTemp.position.z = 0;
        elementTemp.scale.set(5, 5, 5);
        targets.table.forEach(function (obj, i) {
          if (i != index) {
            obj.position.x = self.randomNumber(-2, 2, [0]) * 10000;
            obj.position.y = self.randomNumber(-2, 2, [0]) * 10000;
            obj.position.y = self.randomNumber(-2, 2, [0]) * 10000;
          }
        });

        transform(targets.table, 1000);
        setTimeout(function () {
          browserHistory.push('/game');
        }, 1000);
      });
    }

    self.listenerTemp = (e) => self.keyDownTextField(e, table, tableTemp, targets, data, self, transform);
    document.addEventListener("keydown", this.listenerTemp, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.listenerTemp, false);
  }

  keyDownTextField(e, table, tableTemp, targets, data, self, transform) {
    var keyCode = e.keyCode;
    var currentTime = new Date();
    var timeSpand = currentTime - time;
    time = currentTime;
    // console.log(timeSpand);
    if (!strs && keyCode != 13)
      strs += e.key;
    else if (keyCode != 13 && timeSpand < 30)
      strs += e.key;
    else if (keyCode != 13 && timeSpand >= 30) {
      strs = '';
      strs += e.key;
    }
    else if (strs && keyCode == 13 && timeSpand < 30) {
      console.log(strs);
      var num = strs.match(/\d+/)[0];

      var user = table.find(function (obj) {
        return obj.id == num;
      });
      var index = table.indexOf(user);
      self.props.updateUserInfo(data.users[index]);
      targets.table.forEach(function (obj, i) {
        obj.position.x = tableTemp[i].x;
        obj.position.y = tableTemp[i].y;
        obj.position.z = tableTemp[i].z;
      });
      var elementTemp = targets.table[index];
      elementTemp.position.x = 0;
      elementTemp.position.y = 0;
      elementTemp.position.z = 0;
      elementTemp.scale.set(5, 5, 5);
      targets.table.forEach(function (obj, i) {
        if (i != index) {
          obj.position.x = self.randomNumber(-2, 2, [0]) * 10000;
          obj.position.y = self.randomNumber(-2, 2, [0]) * 10000;
          obj.position.y = self.randomNumber(-2, 2, [0]) * 10000;
        }
      });
      transform(targets.table, 1000);
      setTimeout(function () {
        browserHistory.push('/game');
      }, 1000);
    }
  }

  randomNumber(min, max, exclusions) {
    var hash = new Object();
    for (var i = 0; i < exclusions.length; ++i) {  // TODO: run only once as setup
      hash[exclusions[i]] = i + max - exclusions.length;
    }
    var randomNumber = Math.floor((Math.random() * (max - min - exclusions.length)) + min);
    if (hash.hasOwnProperty(randomNumber)) {
      randomNumber = hash[randomNumber];
    }
    return randomNumber;
  }

  render() {

    return (
      <div>
        <div id="container"></div>

        <div id="menu">
          <button id="table">TABLE</button>
          <button id="sphere">SPHERE</button>
          <button id="helix">HELIX</button>
          <button id="grid">GRID</button>
          <button id="back">BACK</button>
        </div>

      </div>
    )
  }
}

export default Home
