import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CanvasBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    
    // Create reference to canvas
    const canvas = mountRef.current;
    if (!canvas) return;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,         // Allows CSS background gradients to show through
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.2, 100);
    pointLight.position.set(10, 10, 20);
    scene.add(pointLight);

    // 5. Creating Floating Playful Geometries
    const floatingObjects = [];
    const colors = [
      0xff7675, // Coral/Rose Red
      0xfd79a8, // Warm Pink
      0xa29bfe, // Soft Lavender/Purple
      0x74b9ff, // Light Sky Blue
      0x81ecec, // Bright Mint/Cyan
      0x55efc4, // Soft Emerald
      0xffeaa7, // Creamy Golden Yellow
      0xffb142  // Warm Peach Orange
    ];

    // Create geometries
    const sphereGeo = new THREE.SphereGeometry(1.2, 16, 16);
    const octaGeo = new THREE.OctahedronGeometry(0.9, 0);
    const torusGeo = new THREE.TorusGeometry(0.8, 0.25, 8, 24);

    // Add floating bubbles (spheres)
    for (let i = 0; i < 15; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const material = new THREE.MeshPhongMaterial({
        color: color,
        shininess: 30,
        flatShading: true,
        transparent: true,
        opacity: 0.65
      });
      const mesh = new THREE.Mesh(sphereGeo, material);
      mesh.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20 - 5
      );
      mesh.userData = {
        speedY: (Math.random() - 0.5) * 0.02,
        speedX: (Math.random() - 0.5) * 0.02,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        rotSpeedZ: (Math.random() - 0.5) * 0.015,
        pulseSpeed: 1.5 + Math.random() * 1.5,
        pulseAmount: 0.1 + Math.random() * 0.1
      };
      scene.add(mesh);
      floatingObjects.push(mesh);
    }

    // Add floating golden stars (octahedrons)
    for (let i = 0; i < 10; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: 0xffeaa7, // Warm golden
        shininess: 60,
        flatShading: true,
        transparent: true,
        opacity: 0.8
      });
      const mesh = new THREE.Mesh(octaGeo, material);
      mesh.position.set(
        (Math.random() - 0.5) * 45,
        (Math.random() - 0.5) * 45,
        (Math.random() - 0.5) * 20 - 5
      );
      mesh.userData = {
        speedY: (Math.random() - 0.5) * 0.015,
        speedX: (Math.random() - 0.5) * 0.015,
        rotSpeedX: (Math.random() - 0.5) * 0.03,
        rotSpeedY: (Math.random() - 0.5) * 0.03,
        rotSpeedZ: (Math.random() - 0.5) * 0.03,
        pulseSpeed: 2.0 + Math.random() * 2.0,
        pulseAmount: 0.15 + Math.random() * 0.1
      };
      scene.add(mesh);
      floatingObjects.push(mesh);
    }

    // Add floating colorful rings (toruses)
    for (let i = 0; i < 10; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const material = new THREE.MeshPhongMaterial({
        color: color,
        shininess: 40,
        flatShading: true,
        transparent: true,
        opacity: 0.7
      });
      const mesh = new THREE.Mesh(torusGeo, material);
      mesh.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20 - 5
      );
      mesh.userData = {
        speedY: (Math.random() - 0.5) * 0.018,
        speedX: (Math.random() - 0.5) * 0.018,
        rotSpeedX: (Math.random() - 0.5) * 0.025,
        rotSpeedY: (Math.random() - 0.5) * 0.025,
        rotSpeedZ: (Math.random() - 0.5) * 0.025,
        pulseSpeed: 1.8 + Math.random() * 1.5,
        pulseAmount: 0.12 + Math.random() * 0.1
      };
      scene.add(mesh);
      floatingObjects.push(mesh);
    }

    // 6. Twinkling Particle Star Field -> Twinkling Golden Sparkles
    const starsCount = 35;
    const starsGeometry = new THREE.BufferGeometry();
    const starsPositions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i += 3) {
      // Position
      starsPositions[i] = (Math.random() - 0.5) * 60;
      starsPositions[i + 1] = (Math.random() - 0.5) * 60;
      starsPositions[i + 2] = (Math.random() - 0.5) * 30;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));

    // Dynamic 4-pointed golden cartoon star texture
    const createSparkleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      
      const cx = 64;
      const cy = 64;
      const spikes = 4;
      const outerRadius = 56;
      const innerRadius = 14;
      
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      let step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      return texture;
    };
    const sparkleTexture = createSparkleTexture();

    const pMaterial = new THREE.PointsMaterial({
      color: 0xffd32a, // Golden Yellow
      size: 3.5,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      map: sparkleTexture,
      depthWrite: false
    });

    const starParticles = new THREE.Points(starsGeometry, pMaterial);
    scene.add(starParticles);

    // 7. Interactive mouse tracker
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.05;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.05;
    };

    const handleTouchMove = (event) => {
      if (event.touches.length > 0) {
        mouseX = (event.touches[0].clientX - window.innerWidth / 2) * 0.05;
        mouseY = (event.touches[0].clientY - window.innerHeight / 2) * 0.05;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // 8. Handle Resize
    const handleResize = () => {
      if (!canvas) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // 9. Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      targetX = mouseX * 0.15;
      targetY = mouseY * 0.15;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Animate floating objects
      floatingObjects.forEach((obj) => {
        // Slow float
        obj.position.y += obj.userData.speedY;
        obj.position.x += obj.userData.speedX;
        
        // Wrap coordinates if they drift too far
        if (Math.abs(obj.position.y) > 25) obj.position.y = -obj.position.y;
        if (Math.abs(obj.position.x) > 25) obj.position.x = -obj.position.x;

        // Spin in multiple axes for richer animation
        obj.rotation.x += obj.userData.rotSpeedX;
        obj.rotation.y += obj.userData.rotSpeedY;
        obj.rotation.z += obj.userData.rotSpeedZ;

        // Breathing/pulsing scale animation
        const offset = obj.position.x * 0.1 + obj.position.y * 0.1;
        const pulse = 1 + Math.sin(elapsedTime * obj.userData.pulseSpeed + offset) * obj.userData.pulseAmount;
        obj.scale.set(pulse, pulse, pulse);
      });

      // Animate sparkles falling downwards very slowly
      const positions = starsGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        // Very slow falling down
        positions[i + 1] -= 0.02;
        
        // Gentle swaying left & right
        positions[i] += Math.sin(elapsedTime * 0.8 + (i * 0.15)) * 0.012;
        
        // Wrap around if it falls off bottom
        if (positions[i + 1] < -30) {
          positions[i + 1] = 30;
          positions[i] = (Math.random() - 0.5) * 60;
        }
      }
      starsGeometry.attributes.position.needsUpdate = true;

      // Twinkling size pulse
      pMaterial.size = 3.2 + Math.sin(elapsedTime * 3.0) * 0.8;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 10. Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      // Dispose geometry and materials
      sphereGeo.dispose();
      octaGeo.dispose();
      torusGeo.dispose();
      starsGeometry.dispose();
      pMaterial.dispose();
      sparkleTexture.dispose();
      
      floatingObjects.forEach((obj) => {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach((mat) => mat.dispose());
        } else {
          obj.material.dispose();
        }
      });
      
      renderer.dispose();
    };
  }, []);

  return <canvas id="bg-canvas" ref={mountRef} />;
}
