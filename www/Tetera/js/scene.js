(function(){
    
        let scene = new THREE.Scene();
        const aspectRatio = window.innerWidth / window.innerHeight;
        let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        
        camera.position.z = 60;
        camera.position.y = 10;    
    
        let loader = new THREE.TextureLoader();

        var points = [];
        for ( var i = 0; i < 10; i ++ ) {
            points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 8 + 3, ( i - 5 ) * 1 ) );
        }
        //Tapaderita
        var geometry = new THREE.LatheGeometry( points );
        var material = new THREE.MeshBasicMaterial( { color: 0x3A2F0B, side: THREE.DoubleSide } );
        var lathe = new THREE.Mesh( geometry, material );
        //Circuloo
        var points1 = [];
        for ( var i = 0; i < 13; i ++ ) {
            points1.push( new THREE.Vector2( Math.sin( i * 0.3 ) * 13 + 7, ( i - 7 ) * 2.4 ) );
        }
        var geometryL = new THREE.LatheGeometry( points1 );
        var materialL = new THREE.MeshBasicMaterial( { color: 0x3B240B, side: THREE.DoubleSide } );
        var lathe1 = new THREE.Mesh( geometryL, materialL );
        //bolita de la tapadera 
        var geometry = new THREE.SphereBufferGeometry( 4, 32, 32 );
        var material = new THREE.MeshBasicMaterial( {color: 0x3A2F0B} );
        var sphere = new THREE.Mesh( geometry, material );
       //cylinder
       var geometry = new THREE.CylinderBufferGeometry( 3, 5, 15, 30 );
       var material = new THREE.MeshBasicMaterial( {color: 0x3B240B} );
       var cylinder = new THREE.Mesh( geometry, material );
       //torus
       var geometry = new THREE.TorusGeometry( 6, 1, 20, 180 );
       var material = new THREE.MeshBasicMaterial( { color: 0x3B240B} );
       var torus = new THREE.Mesh( geometry, material );
      
       
        let pointLight = new THREE.PointLight(0x3B240B);
    
        pointLight.position.y = 60;
        pointLight.position.z = 20;

        lathe.position.y = 2;
        lathe.rotation.x = 3;
        lathe1.position.y =-5;
       
        sphere.position.y = 11;

        cylinder.position.x = -15;
        cylinder.position.y = -2;
        cylinder.rotation.z = .95;

        torus.position.x = 20;
        torus.position.z = 1;
        torus.position.y = -9; 
    
        scene.background = new THREE.Color(0xFAAC58);
        scene.add(new THREE.AmbientLight(0x424242));
        scene.add(lathe);
        scene.add(lathe1);
        scene.add(sphere);
        scene.add(cylinder);
        scene.add(torus);
        scene.add(pointLight);
              
        function loop(){
            requestAnimationFrame(loop);
            //torus.rotation.x += 0.01;
            renderer.render(scene, camera);
        }
    
        loop();
    
    })();