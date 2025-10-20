$(document).ready(function() {
    // Initialize the page
    initializePage();
    
    // Love button click handler
    $('#loveButton').click(function() {
        createHeartExplosion();
        showLoveMessage();
        $(this).addClass('clicked');
        
        // Reset button state after animation
        setTimeout(() => {
            $(this).removeClass('clicked');
        }, 1000);
    });
    
    // Enhanced hover effects to the heartbeat canvas
    $('.heartbeat-canvas').hover(
        function() {
            $(this).addClass('heart-hover');
            createHeartGlow();
        },
        function() {
            $(this).removeClass('heart-hover');
        }
    );
    
    // Add click effect to the heartbeat canvas
    $('.heartbeat-canvas').click(function() {
        createHeartExplosion();
        showSpecialMessage();
    });
    
    // Add floating hearts periodically
    setInterval(addRandomFloatingHeart, 3000);
    
    // Add sparkle effects
    setInterval(addSparkle, 2000);
    
    // Start the particle animation around the GIF
    startParticleAnimation();
});

function initializePage() {
    // Add entrance animation to elements
    $('.title').hide().fadeIn(2000);
    $('.subtitle').hide().delay(500).fadeIn(1500);
    $('.heart-container').hide().delay(1000).fadeIn(2000);
    $('.message').hide().delay(1500).fadeIn(2000);
    $('.vietnamese-text').hide().delay(2000).fadeIn(1500);
}

// Particle Animation around Heart GIF
function startParticleAnimation() {
    // Create particles periodically around the GIF
    function createHeartParticles() {
        const canvas = $('.heartbeat-canvas');
        if (canvas.length === 0) return; // Safety check
        
        const canvasRect = canvas[0].getBoundingClientRect();
        const centerX = canvasRect.width / 2;
        const centerY = canvasRect.height / 2;
        
        // Create particles around the heart GIF
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                // Random position around the center
                const angle = Math.random() * Math.PI * 2;
                const distance = 50 + Math.random() * 100;
                const x = centerX + Math.cos(angle) * distance;
                const y = centerY + Math.sin(angle) * distance;
                
                // Create particle
                const particle = $('<div class="particle"></div>');
                particle.css({
                    left: x + 'px',
                    top: y + 'px',
                    background: `rgb(${255}, ${158 + Math.random() * 50}, ${196 + Math.random() * 30})`,
                    animationDelay: Math.random() * 1 + 's',
                    animationDuration: (2 + Math.random() * 1) + 's',
                    zIndex: 5
                });
                
                canvas.append(particle);
                
                // Remove particle after animation
                setTimeout(() => {
                    particle.fadeOut(300, function() {
                        $(this).remove();
                    });
                }, 3000);
            }, i * 20); // Staggered creation
        }
    }
    
    // Start particle generation loop
    setInterval(createHeartParticles, 3000); // Create particles every 3 seconds
    
    // Initial particle burst
    setTimeout(createHeartParticles, 1000);
}

function createHeartExplosion() {
    const button = $('#loveButton');
    const buttonRect = button[0].getBoundingClientRect();
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY = buttonRect.top + buttonRect.height / 2;
    
    // Create explosion container
    const explosion = $('<div class="heart-explosion"></div>');
    $('body').append(explosion);
    
    // Create multiple hearts for explosion
    const heartEmojis = ['💕', '💖', '💗', '💝', '💘', '💓', '💞', '💟'];
    
    for (let i = 0; i < 12; i++) {
        const heart = $('<div class="explosion-heart"></div>');
        heart.text(heartEmojis[Math.floor(Math.random() * heartEmojis.length)]);
        
        // Random position around the button
        const angle = (i / 12) * 2 * Math.PI;
        const distance = 50 + Math.random() * 30;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        heart.css({
            left: x + 'px',
            top: y + 'px',
            animationDelay: Math.random() * 0.3 + 's'
        });
        
        explosion.append(heart);
    }
    
    // Remove explosion after animation
    setTimeout(() => {
        explosion.remove();
    }, 1000);
}

function showLoveMessage() {
    const messages = [
        "Anh yêu em hơn cả lời nói có thể diễn tả! 💕",
        "Em là tất cả của anh! 💖",
        "Mãi mãi và luôn luôn! 💗",
        "Trái tim anh thuộc về em! 💝",
        "Em làm thế giới của anh trở nên đẹp đẽ! 💘"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create temporary message
    const messageDiv = $('<div class="temp-message"></div>');
    messageDiv.text(randomMessage);
    messageDiv.css({
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(255, 255, 255, 0.9)',
        color: '#ff6b6b',
        padding: '20px 30px',
        borderRadius: '20px',
        fontSize: '1.2rem',
        fontWeight: '600',
        zIndex: '1000',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        animation: 'messageAppear 2s ease-out forwards'
    });
    
    $('body').append(messageDiv);
    
    // Remove message after display
    setTimeout(() => {
        messageDiv.fadeOut(500, function() {
            $(this).remove();
        });
    }, 2000);
}

function showSpecialMessage() {
    const vietnameseMessages = [
        "Em là tình yêu của anh! 💕",
        "Anh yêu em rất nhiều! 💖",
        "Chúc em ngày 20-10 vui vẻ! 💗",
        "Em là người phụ nữ tuyệt vời nhất! 💝",
        "Em là ánh sáng trong cuộc đời anh! 💘",
        "Cảm ơn em vì đã là vợ của anh! 💓",
        "Em là niềm hạnh phúc của anh! 💞",
        "Anh sẽ yêu em mãi mãi! 💟"
    ];
    
    const randomMessage = vietnameseMessages[Math.floor(Math.random() * vietnameseMessages.length)];
    
    // Create special message
    const messageDiv = $('<div class="special-message"></div>');
    messageDiv.text(randomMessage);
    messageDiv.css({
        position: 'fixed',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
        color: 'white',
        padding: '25px 35px',
        borderRadius: '25px',
        fontSize: '1.3rem',
        fontWeight: '600',
        zIndex: '1000',
        boxShadow: '0 6px 25px rgba(255, 107, 107, 0.5)',
        textAlign: 'center',
        animation: 'specialMessageAppear 3s ease-out forwards'
    });
    
    $('body').append(messageDiv);
    
    // Remove message after display
    setTimeout(() => {
        messageDiv.fadeOut(800, function() {
            $(this).remove();
        });
    }, 3000);
}

function addRandomFloatingHeart() {
    const heartEmojis = ['💕', '💖', '💗', '💝', '💘', '💓', '💞', '💟'];
    const randomHeart = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    
    const floatingHeart = $('<div class="random-floating-heart"></div>');
    floatingHeart.text(randomHeart);
    floatingHeart.css({
        position: 'fixed',
        left: Math.random() * 100 + '%',
        bottom: '-50px',
        fontSize: (1.5 + Math.random()) + 'rem',
        zIndex: '5',
        pointerEvents: 'none',
        animation: 'randomFloat 6s linear forwards'
    });
    
    $('body').append(floatingHeart);
    
    // Remove after animation
    setTimeout(() => {
        floatingHeart.remove();
    }, 6000);
}

function addSparkle() {
    const sparkle = $('<div class="sparkle"></div>');
    sparkle.css({
        position: 'fixed',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        width: '4px',
        height: '4px',
        background: 'white',
        borderRadius: '50%',
        zIndex: '3',
        pointerEvents: 'none',
        animation: 'sparkleEffect 2s ease-out forwards'
    });
    
    $('body').append(sparkle);
    
    // Remove after animation
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

function createHeartGlow() {
    // Create a glowing effect around the heart
    const glow = $('<div class="heart-glow"></div>');
    glow.css({
        position: 'absolute',
        top: '-20px',
        left: '-20px',
        width: '240px',
        height: '240px',
        background: 'radial-gradient(circle, rgba(255, 107, 107, 0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: '-1',
        animation: 'glowPulse 2s ease-in-out infinite'
    });
    
    $('.heart-container').append(glow);
    
    // Remove glow after animation
    setTimeout(() => {
        glow.fadeOut(1000, function() {
            $(this).remove();
        });
    }, 3000);
}

// Additional romantic effects (keeping the romantic theme)
function startRomanticEffects() {
    // Add gentle swaying to the layered hearts
    setInterval(() => {
        $('.animated-layered-hearts').addClass('gentle-sway');
        setTimeout(() => {
            $('.animated-layered-hearts').removeClass('gentle-sway');
        }, 2000);
    }, 5000);
    
    // Add color changes to the background
    setInterval(() => {
        $('body').addClass('color-shift');
        setTimeout(() => {
            $('body').removeClass('color-shift');
        }, 3000);
    }, 8000);
}

// Add CSS animations dynamically
$('<style>')
    .prop('type', 'text/css')
    .html(`
        @keyframes messageAppear {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
            }
            50% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.1);
            }
            100% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
        
        @keyframes specialMessageAppear {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.3) rotate(-10deg);
            }
            30% {
                opacity: 0.8;
                transform: translate(-50%, -50%) scale(1.1) rotate(5deg);
            }
            100% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1) rotate(0deg);
            }
        }
        
        @keyframes randomFloat {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes sparkleEffect {
            0% {
                opacity: 0;
                transform: scale(0);
            }
            50% {
                opacity: 1;
                transform: scale(1.5);
            }
            100% {
                opacity: 0;
                transform: scale(0);
            }
        }
        
        .heart-hover {
            filter: brightness(1.3) saturate(1.4) !important;
        }
        
        @keyframes glowPulse {
            0%, 100% { 
                opacity: 0.3; 
                transform: scale(1);
            }
            50% { 
                opacity: 0.6; 
                transform: scale(1.1);
            }
        }
        
        .gentle-sway {
            animation: gentleSway 2s ease-in-out;
        }
        
        @keyframes gentleSway {
            0%, 100% { transform: rotate(-45deg) translateX(0); }
            25% { transform: rotate(-45deg) translateX(-5px); }
            75% { transform: rotate(-45deg) translateX(5px); }
        }
        
        .color-shift {
            background: linear-gradient(135deg, #ff8e8e, #ffa8a8, #ffb3ba, #ff6b6b) !important;
        }
        
        .clicked {
            transform: scale(0.95);
            background: linear-gradient(45deg, #ffa8a8, #ffb3ba) !important;
        }
    `)
    .appendTo('head');
