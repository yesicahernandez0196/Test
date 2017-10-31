/*(function (){
    let scene = new THREE.Scene();
    const aspectRatio = window.innerWidth / window.innerHeight;
    let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z =60;
    camera.position.y =1;
    //camera.position.x =0.3
     let mesh;
     let loader = new THREE.TextureLoader();
     loader.load('public/map.jpg', function(texture){
        let geometry = new THREE.SphereGeometry (20,100,100)
        let material = new THREE.MeshBasicMaterial({
             map: texture
         })
         mesh = new THREE.Mesh (geometry, material);
         mesh.position.y =0;
         scene.add(mesh);
     })



    //let geometry = new THREE.BoxGeometry(1,1,1,1);
    let groundMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
    });

    //let mesh = new THREE.Mesh(geometry, groundMaterial);
    let pointLight = new THREE.PointLight(0x404040);
    pointLight.position.y = 80;
    pointLight.position.z = 20;
    scene.background = new THREE.Color(0xeeeeee);
    //scene.add(mesh);
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(pointLight);

    //renderer.render(scene, camera);

    function loop(){
        requestAnimationFrame(loop);
       mesh.rotation.y +=0.01;
      //  mesh.rotation.z += 0.01;
       // console.log("New Frame");
        renderer.render(scene, camera);
    }

    loop();
    
})();*/

(function(){
    let scene = new THREE.Scene();
    const aspectRatio = window.innerWidth/window.innerHeight;
    let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 300);// se cambio de 100 a 300
    let renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);//estructura del canvas

    camera.position.z = 300;
    camera.position.y = 1;
    camera.position.x = 40;
    let mesh;
    let mesh1;
    let loader = new THREE.TextureLoader();

    loader.load('public/mercurio.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(20, 100, 100)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })
        mesh = new THREE.Mesh(geometry, material);

        mesh.position.x = 0;
        scene.add(mesh);
    });
    loader.load('public/venus.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(10, 100, 100)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })
        mesh1 = new THREE.Mesh(geometry, material);

        mesh1.position.x = 50;
        scene.add(mesh1);
    });
    loader.load('public/map.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(20, 100, 100)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })
        mesh2 = new THREE.Mesh(geometry, material);

        mesh2.position.x = -50;
        scene.add(mesh2);
    });
    loader.load('public/marte.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(35, 100, 100)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })
        mesh3 = new THREE.Mesh(geometry, material);

        mesh3.position.x = -120;
        scene.add(mesh3);
    });
    loader.load('public/Jupiter.png', function(texture){
        let geometry = new THREE.SphereGeometry(30, 100, 100)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })
        mesh4 = new THREE.Mesh(geometry, material);

        mesh4.position.x = 100;
        scene.add(mesh4);
    });
    loader.load('public/saturno.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(15, 100, 100)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })
        mesh5 = new THREE.Mesh(geometry, material);

        mesh5.position.x = -190;
        scene.add(mesh5);
    });
    loader.load('public/urano.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(10, 100, 100)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })
        mesh6 = new THREE.Mesh(geometry, material);

        mesh6.position.x = 150;
        scene.add(mesh6);
    });
    loader.load('public/neptuno.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(20, 100, 100)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })
        mesh7 = new THREE.Mesh(geometry, material);

        mesh7.position.x = 200;
        scene.add(mesh7);
    });
    
    //let geometry = new THREE.BoxGeometry(1,1,1,1);
    //let groundMaterial = new THREE.MeshPhongMaterial({
    //    color:0xffffff
    //});
    ////let mesh = new THREE.Mesh(geometry,groundMaterial);

    let pointLight = new THREE.PointLight(0x404040);

    pointLight.position.y = 80;
    
    //scene.add(mesh);
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(pointLight);

    function loop(){
        requestAnimationFrame(loop);
        mesh.rotation.x += 0.02
        mesh1.rotation.x += 0.02
        mesh2.rotation.x += 0.02
        mesh3.rotation.x += 0.02
        mesh4.rotation.x += 0.02
        mesh5.rotation.x += 0.02
        mesh6.rotation.x += 0.02
        mesh7.rotation.x += 0.02
       
        //console.log("New Frame");
        renderer.render(scene, camera);
    }
    loop();
})();