document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer');
    footer.innerHTML = '<footer class="bg-gray-800 text-white p-6 mt-8">' +
        '<div class="container mx-auto">' +
            '<div class="flex justify-center items-center">' +
                '<div class="text-center w-full">' +
                    '<p>&copy; 2023 codeXditor. All rights reserved.</p>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</footer>';
});