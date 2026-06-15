
        // Typing Effect for Name (Infinite loop Type -> Delete -> Type)
        const words = ["Muhammad Hanif"];
        let i = 0;
        let timer;

        function typingEffect() {
            let word = words[i].split("");
            var loopTyping = function() {
                if (word.length > 0) {
                    document.getElementById('typing-text').innerHTML += word.shift();
                } else {
                    setTimeout(deletingEffect, 2000); // Wait before starting delete
                    return false;
                }
                timer = setTimeout(loopTyping, 150); // Typing speed
            };
            loopTyping();
        }

        function deletingEffect() {
            let word = words[i].split("");
            var loopDeleting = function() {
                if (word.length > 0) {
                    word.pop();
                    document.getElementById('typing-text').innerHTML = word.join("");
                } else {
                    setTimeout(typingEffect, 500); // Wait before re-typing
                    return false;
                }
                timer = setTimeout(loopDeleting, 100); // Deleting speed
            };
            loopDeleting();
        }

        // Effect Initialize on Page Load
        document.addEventListener("DOMContentLoaded", () => {
            typingEffect();
        });