
        const uploadBtn = document.getElementById('uploadBtn');
        const imageUpload = document.getElementById('imageUpload');
        const imagePreview = document.getElementById('imagePreview');
        const previewImg = document.getElementById('previewImg');
        const removeImage = document.getElementById('removeImage');

        uploadBtn.addEventListener('click', () => {
            imageUpload.click();
        });

        imageUpload.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    previewImg.src = e.target.result;
                    imagePreview.style.display = 'flex';
                };
                reader.readAsDataURL(file);
            }
        });

        removeImage.addEventListener('click', () => {
            imagePreview.style.display = 'none';
            imageUpload.value = '';
        });

        // Sidebar Toggle
        const sidebar = document.querySelector('.sidebar');
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebarClose = document.getElementById('sidebarClose');

        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('show');
            document.querySelector('.main-content').classList.toggle('collapsed');
            document.querySelector('.chat-box').classList.toggle('collapsed');
        });

        sidebarClose.addEventListener('click', () => {
            sidebar.classList.remove('show');
            document.querySelector('.main-content').classList.remove('collapsed');
            document.querySelector('.chat-box').classList.remove('collapsed');
        });