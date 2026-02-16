class SnowfallEffect {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.snowflakes = [];
    this.animationId = null;
    this.isActive = false;
    this.maxSnowflakes = 150;
    this.init();
  }

  init() {
    this.createCanvas();
    this.createSnowflakes();
    this.startAnimation();
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'snowfall-canvas';
    this.canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
      opacity: 0.8;
    `;
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
    document.body.appendChild(this.canvas);
    
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createSnowflakes() {
    for (let i = 0; i < this.maxSnowflakes; i++) {
      this.snowflakes.push(this.createSnowflake());
    }
  }

  createSnowflake() {
    const size = Math.random() * 4 + 2;
    const x = Math.random() * this.canvas.width;
    const y = Math.random() * this.canvas.height;
    const speedX = Math.random() * 1 - 0.5;
    const speedY = Math.random() * 1.5 + 0.5;
    const opacity = Math.random() * 0.5 + 0.3;
    const rotation = Math.random() * Math.PI * 2;
    const rotationSpeed = (Math.random() - 0.5) * 0.02;
    const type = Math.floor(Math.random() * 3);

    return {
      x,
      y,
      size,
      speedX,
      speedY,
      opacity,
      rotation,
      rotationSpeed,
      type
    };
  }

  drawSnowflake(snowflake) {
    this.ctx.save();
    this.ctx.translate(snowflake.x, snowflake.y);
    this.ctx.rotate(snowflake.rotation);
    this.ctx.globalAlpha = snowflake.opacity;
    this.ctx.fillStyle = '#ffffff';

    switch (snowflake.type) {
      case 0:
        this.drawCircleSnowflake(snowflake.size);
        break;
      case 1:
        this.drawStarSnowflake(snowflake.size);
        break;
      case 2:
        this.drawDendriteSnowflake(snowflake.size);
        break;
    }

    this.ctx.restore();
  }

  drawCircleSnowflake(size) {
    this.ctx.beginPath();
    this.ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
    this.ctx.fill();
  }

  drawStarSnowflake(size) {
    const spikes = 6;
    const outerRadius = size;
    const innerRadius = size / 2;

    this.ctx.beginPath();
    for (let i = 0; i < spikes * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i * Math.PI) / spikes;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      if (i === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
    }
    this.ctx.closePath();
    this.ctx.fill();
  }

  drawDendriteSnowflake(size) {
    const branches = 6;
    const branchLength = size;

    for (let i = 0; i < branches; i++) {
      const angle = (i * Math.PI * 2) / branches;
      this.ctx.save();
      this.ctx.rotate(angle);
      
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(0, -branchLength);
      this.ctx.strokeStyle = '#ffffff';
      this.ctx.lineWidth = 0.5;
      this.ctx.stroke();

      for (let j = 0.3; j < 1; j += 0.3) {
        const subBranchLength = branchLength * (1 - j) * 0.4;
        const subBranchAngle1 = Math.PI / 4;
        const subBranchAngle2 = -Math.PI / 4;

        this.ctx.beginPath();
        this.ctx.moveTo(0, -branchLength * j);
        this.ctx.lineTo(
          Math.sin(subBranchAngle1) * subBranchLength,
          -branchLength * j - Math.cos(subBranchAngle1) * subBranchLength
        );
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, -branchLength * j);
        this.ctx.lineTo(
          Math.sin(subBranchAngle2) * subBranchLength,
          -branchLength * j - Math.cos(subBranchAngle2) * subBranchLength
        );
        this.ctx.stroke();
      }

      this.ctx.restore();
    }
  }

  updateSnowflake(snowflake) {
    snowflake.x += snowflake.speedX;
    snowflake.y += snowflake.speedY;
    snowflake.rotation += snowflake.rotationSpeed;

    if (snowflake.y > this.canvas.height + 10) {
      snowflake.y = -10;
      snowflake.x = Math.random() * this.canvas.width;
    }

    if (snowflake.x > this.canvas.width + 10) {
      snowflake.x = -10;
    } else if (snowflake.x < -10) {
      snowflake.x = this.canvas.width + 10;
    }
  }

  animate() {
    if (!this.isActive) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const snowflake of this.snowflakes) {
      this.updateSnowflake(snowflake);
      this.drawSnowflake(snowflake);
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  startAnimation() {
    this.isActive = true;
    this.animate();
  }

  stopAnimation() {
    this.isActive = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  destroy() {
    this.stopAnimation();
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }
}

const snowfallEffect = new SnowfallEffect();