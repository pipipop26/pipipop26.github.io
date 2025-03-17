document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        // Создание модального окна вручную через JS

        // Обёртка модального окна
        let modal = document.createElement("div");
        modal.className = "modal fade";
        modal.id = "subscribeModal";
        modal.setAttribute("tabindex", "-1");
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-hidden", "true");

        let dialog = document.createElement("div");
        dialog.className = "modal-dialog modal-dialog-centered";
        dialog.setAttribute("role", "document");

        let content = document.createElement("div");
        content.className = "modal-content";

        let header = document.createElement("div");
        header.className = "modal-header bg-dark text-white";

        let title = document.createElement("h5");
        title.className = "modal-title";
        title.innerText = "Подпишитесь на новости манги!";

        let closeBtn = document.createElement("button");
        closeBtn.className = "close text-white";
        closeBtn.setAttribute("data-dismiss", "modal");
        closeBtn.innerHTML = '<span aria-hidden="true">&times;</span>';

        header.appendChild(title);
        header.appendChild(closeBtn);

        let body = document.createElement("div");
        body.className = "modal-body";
        body.innerText = "Получайте первыми уведомления о новинках, скидках и специальных предложениях на мангу.";

        let form = document.createElement("form");
        let formGroup = document.createElement("div");
        formGroup.className = "form-group mt-3";

        let emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.className = "form-control";
        emailInput.placeholder = "Введите ваш email";

        formGroup.appendChild(emailInput);
        form.appendChild(formGroup);
        body.appendChild(form);

        let footer = document.createElement("div");
        footer.className = "modal-footer";

        let subscribeBtn = document.createElement("button");
        subscribeBtn.className = "btn btn-primary";
        subscribeBtn.type = "button";
        subscribeBtn.innerText = "Подписаться";

        let laterBtn = document.createElement("button");
        laterBtn.className = "btn btn-secondary";
        laterBtn.type = "button";
        laterBtn.setAttribute("data-dismiss", "modal");
        laterBtn.innerText = "Позже";

        footer.appendChild(subscribeBtn);
        footer.appendChild(laterBtn);

        content.appendChild(header);
        content.appendChild(body);
        content.appendChild(footer);
        dialog.appendChild(content);
        modal.appendChild(dialog);

        // Добавление модального окна в body
        document.body.append(modal);

        // Используем querySelectorAll и forEach для перебора ссылок и добавления классов
        let links = document.querySelectorAll("nav a");
        links.forEach(function (link) {
            link.classList.add("px-2");
        });

        // Пример работы с childNodes
        let nav = document.querySelector("nav");
        for (let i = 0; i < nav.childNodes.length; i++) {
            let node = nav.childNodes[i];
            if (node.nodeType === 3) {
                // Удаляем лишние текстовые узлы (переводы строк и пробелы)
                nav.removeChild(node);
            }
        }

        // Показываем модалку через Bootstrap метод
        $('#subscribeModal').modal('show');

    }, 2000);
});
