class Dialog {
	/**
	 * Creates new dialog
	 * @constructor
	 * @param {string} id Dialog HTML ID
	 */
	constructor(id) {
		this.gsap = typeof gsap !== 'undefined';
		this.id = id;
		this.d = $(document.createElement('div'))
			.appendTo('body')
			.addClass('dialog')
			.attr('id', 'dialog_' + id);
		this.w = $(document.createElement('div'))
			.appendTo(this.d)
			.addClass('window');
		this.h = $(document.createElement('div'))
			.appendTo(this.w)
			.addClass('header');
		this.c = $(document.createElement('div'))
			.appendTo(this.w)
			.addClass('content');
		this.b = $(document.createElement('div'))
			.appendTo(this.w)
			.addClass('buttons');
		this.h.hide();
		this.b.hide();
		this.bc = 0;
		return this;
	}

	/**
	 * Set HTML title
	 * @param {string} title Title HTML code
	 */
	setTitle(title) {
		this.h.html(title).show();
		return this;
	}

	/**
	 * Set title text without HTML support
	 * @param {string} title Title text
	 */
	setTitleRaw(title) {
		this.h.text(title).show();
		return this;
	}

	/**
	 * Set HTML content
	 * @param {string} content HTML content
	 */
	setContent(content) {
		this.c.html(content);
		return this;
	}

	/**
	 * Add new button to dialog
	 * @param {string} text Button text
	 * @param {function} callback Onclick event
	 * @param {array} classes Additional CSS classes
	 */
	addButton(text, callback, classes = '') {
		this.bc++;
		this.b.show().css(
			'gridTemplateColumns',
			`repeat(${this.bc}, 1fr)`
		);
		let btn = $(document.createElement('button'));
		btn.appendTo(this.b)
			.addClass('btn')
			.addClass(classes)
			.html(text)
			.click(() => callback(this));
		return this;
	}

	/**
	 * Show dialog
	 */
	show() {
		if (this.gsap) {
			this.d.show();
			gsap.fromTo('#dialog_' + this.id, {
				opacity: 0.5
			}, {
				opacity: 1,
				duration: 0.15,
				ease: 'power1.out'
			});
			gsap.fromTo(`#dialog_${this.id} > .window`, {
				scale: 0.9
			}, {
				scale: 1,
				duration: 0.15,
				ease: 'power1.out'
			});
			return this;
		}
		this.d.fadeIn('fast');
		this.w.hide().fadeIn('fast');
		return this;
	}

	/**
	 * Hide dialog
	 */
	hide() {
		if (this.gsap) {
			gsap.fromTo(`#dialog_${this.id} .window`, {
				scale: 1
			}, {
				scale: 0.95,
				duration: 0.2,
				ease: 'power1.out'
			});
			gsap.to(`#dialog_${this.id}`, {
				opacity: 0,
				duration: 0.2,
				ease: 'power1.out',
				onComplete: () => this.d.css('display', 'none')
			});
			return this;
		}
		this.d.fadeOut('fast');
		return this;
	}

	/**
	 * Hide and destroy dialog
	 */
	close() {
		this.hide()
		setTimeout(this.destroy, 200);
	}


	/**
	 * Destroy dialog
	 */
	destroy() {
		$(`#dialog_${this.id}`).remove();
	}

	/**
	 * Create new alert dialog
	 * 
	 * @param {string} text Alert message (HTML formatted)
	 * @param {string} title Alert title
	 */
	static alert(text, title = null) {
		let id = 'alert';
		let d = new Dialog(id);
		if (title) d.setTitle(title);
		d.setContent(text)
			.addButton('Ок', d => d.close(), 'primary')
			.show();
	}
	
	/**
	 * Create confirm dialog
	 * 
	 * @param {string} text Text
	 * @param {string} title Title
	 */
	static confirm(text, title = null) {
		let id = 'confirm';
		let d = new Dialog(id);
		if (title) d.setTitle(title);
		return new Promise(res => {
			d.setContent(text)
				.addButton('Отмена', d => {
					d.close();
					res(false);
				})
				.addButton('Продолжить', d => {
					d.close();
					res(true);
				}, 'primary')
				.show();
		});
	}
	
	/**
	 * Create dialog with yes/no select
	 * 
	 * @param {string} text Text
	 * @param {string} title Title
	 */
	static question(text, title = null) {
		let id = 'confirm';
		let d = new Dialog(id);
		if (title) d.setTitle(title);
		return new Promise(res => {
			d.setContent(text)
				.addButton('Нет', d => {
					d.close();
					res(false);
				})
				.addButton('Да', d => {
					d.close();
					res(true);
				}, 'primary')
				.show();
		});
	}
}