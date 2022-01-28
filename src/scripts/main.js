// console.log('alalal');
$(function() {
    $('[data-element="toggle"]').on('click', function(e) {
        var href = $(this).data('target');
        _target = $(`#${href}`);
        _target.toggleClass('visible');
    })
});

// document.addEventListener("DOMContentLoaded", () => {
// 	svg4everybody();
// 	var forms = document.querySelectorAll('.needs-validation');
// 	var validation = Array.prototype.filter.call(forms, function (form) {
// 		form.addEventListener('submit', function (event) {
// 			if (form.checkValidity() === false) {
// 				event.preventDefault();
// 				event.stopPropagation();
// 			}
// 			form.classList.add('was-validated');
// 		})
// 	});


	
// 	$('[data-element="select"]').each(function(i, el) {
// 		$(el).select2({
// 			language: "ru"
// 		});
// 		$(el).on('select2:select', function( event ) {
// 			var $searchfield = $(this).parent().find('.select2-search__field');
// 			$searchfield.val('');
// 	});
// 		if ($(el).data('search') === false) {
// 			$(el).on('select2:open', function( event ) {
// 					var $searchfield = $(this).parent().find('.select2-search__field');
// 					console.log($searchfield);
// 					$searchfield.prop('disabled', true);
// 			});
// 		}
// 	})

// 	var chartElems = document.querySelectorAll('[data-element="chart"]');
// 	var charts = Array.prototype.filter.call(chartElems, function(elem) {
// 		var chart = elem.getContext('2d');
// 		var myChart = new Chart(chart, {
// 			type: 'line',
// 			data: {
// 					labels: ['Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
// 					datasets: [
// 						{
// 							label: '#1',
// 							data: [0, 100, 80, 150, 250, 180],
// 							borderWidth: 3,
// 							fill: false,
// 							borderColor: '#4f4f4f',
// 						},
// 						{
// 							label: '#2',
// 							data: [0, 80, 120, 110, 220, 110],
// 							borderWidth: 3,
// 							fill: false,
// 							borderColor: '#22BE9C',
// 						}
// 				]
// 			},
// 			options: {
// 				plugins: {
// 					legend: {
// 						display: false
// 					},
// 				}
// 			}
// 		});
// 	})

// 	$('[data-element="toggle"]').on('click', function(e) {
// 		var _target = $(this).data('target');
// 		if(_target === '#app' && !$(_target).hasClass('active')) {
// 			$('body').addClass('scroll-hidden')
// 		} else {
// 			$('body').removeClass('scroll-hidden')
// 		}
// 		$(_target).toggleClass('active');
// 	})
// 	$('[data-element="toggle-switch"]').on('change', function(e) {
// 		var _target = $(this).data('target');
// 		console.log(_target);
// 		console.log($(e.target)[0].checked);
// 		if ($(e.target)[0].checked) {
// 			$(_target).removeClass('hidden');
// 		} else {
// 			$(_target).addClass('hidden');
// 		}
// 	})


// 	$('[data-element="mask"]').each(function(i, el) {
// 		new Inputmask().mask($(el));
// 	})


// 	var sortableTags = document.querySelectorAll('[data-element="sortable"]');
// 	Array.prototype.filter.call(sortableTags, function(sortable) {
// 		var instance = new Sortable(sortable, {
// 				group: 'nested',
// 				animation: 150,
// 				fallbackOnBody: true,
// 				swapThreshold: 0.65,
// 				handle: '[data-element="handle"]',
// 				onChange: function(ev) {
// 					controlToggleVisibilityOnSortableChange(ev);
// 				}
// 			});
// 	});

// 	function controlToggleVisibilityOnSortableChange(ev) {
// 		var toggleFrom = document.querySelector(`[data-bs-target="#${ev.from.id}"]`),
// 				toggleTo = document.querySelector(`[data-bs-target="#${ev.to.id}"]`)
// 				collapseFrom = ev.from,
// 				collapseTo = ev.to;

// 			if(!collapseFrom.children.length && toggleFrom) {
// 				toggleFrom.classList.remove('visible');
// 			}
// 			if(collapseTo.children.length && toggleTo) {
// 				toggleTo.classList.add('visible');
// 			}
// 	}
// 	function controlToggleVisibilityOnRender(collapse) {
// 		var toggle = document.querySelector(`[data-bs-target="#${collapse.id}"]`);
// 		if(toggle && collapse && collapse.children.length) {
// 			toggle.classList.add('visible')
// 		}

// 	}

// 	var sortableCollapseElements = document.querySelectorAll('[data-element="sortable"]');
// 	Array.prototype.filter.call(sortableCollapseElements, function(collapse) {
// 		controlToggleVisibilityOnRender(collapse);

// 	})

// 	var editorElems = document.querySelectorAll('[data-element="editor-small"]');
// 	var editors = [];
// 	Array.prototype.filter.call(editorElems, function(editor) {
// 		ClassicEditor
// 			.create(editor, {
// 				toolbar: [
// 					'bold',
// 					'italic',
// 					'link',
// 					'undo',
// 					'redo'
// 				]
// 			})
// 			.then(function(model) {
// 				editors.push(model);
// 			});
// 	})

// 	var uploadImgs = document.querySelectorAll('[data-element="form-file-input-single"]');
// 	Array.prototype.filter.call(uploadImgs, function(_input) {
// 		var _parent = _input.closest('[data-element="form-file-single"]'),
// 				_buttonDelete = _parent.querySelector('[data-element="form-file-delete"]');

// 		_input.addEventListener('change', function(e) {
// 			var _this = e.target,
// 					file = e.target.files[0],
// 					_parent = _this.closest('[data-element="form-file-single"]'),
// 					_img = _parent.querySelector('[data-element="form-file-img"]'),
// 					_info = _parent.querySelector('[data-element="form-file-info"]');

// 			_img.src = URL.createObjectURL(file);
// 			_info.textContent = '';
// 		})

// 		_buttonDelete.addEventListener('click', function(e) {
// 			var _this = e.currentTarget,
// 					_parent = _this.closest('[data-element="form-file-single"]'),
// 					_img = _parent.querySelector('[data-element="form-file-img"]'),
// 					_input = _parent.querySelector('[data-element="form-file-input-single"]'),
// 					_info = _parent.querySelector('[data-element="form-file-info"]');

// 			_input.value = '';
// 			_img.src = _img.dataset.placeholder;
// 			_info.textContent = _info.dataset.placeholder;
// 		})

// 	})


// 	// var bar = $('.bar');
// 	// var percent = $('.percent');
// 	// var status = $('#status');

// 	// $('form').ajaxForm({
// 	// 		beforeSend: function() {
// 	// 				status.empty();
// 	// 				var percentVal = '0%';
// 	// 				bar.width(percentVal);
// 	// 				percent.html(percentVal);
// 	// 		},
// 	// 		uploadProgress: function(event, position, total, percentComplete) {
// 	// 				var percentVal = percentComplete + '%';
// 	// 				bar.width(percentVal);
// 	// 				percent.html(percentVal);
// 	// 		},
// 	// 		complete: function(xhr) {
// 	// 				status.html(xhr.responseText);
// 	// 		}
// 	// });

// 	var datepickers = document.querySelectorAll('[data-element="datepicker"]');
// 	Array.prototype.filter.call(datepickers, function(datepicker) {
// 		$(datepicker).datepicker({
// 			language: 'ru',
// 			format: 'dd.mm.yyyy',
// 			container: datepicker,
// 			maxViewMode: 2,
// 			orientation: 'bottom left'
// 		});
// 	})

// 	$('.input-daterange input').each(function() {
// 			$(this).datepicker({
// 				language: 'ru',
// 				format: 'dd.mm.yyyy',
// 				// multidate: true,
// 				// container: datepicker,
// 				maxViewMode: 2,
// 				orientation: 'bottom left'
// 			});
// 	});

// 	// var alerts = document.querySelectorAll('[data-element="alert"]');
// 	// Array.prototype.filter.call(alerts, function(alert) {
// 	// 	var _buttonClose = alert.querySelector('[data-element="alert-close"]');
// 	// 	_buttonClose.addEventListener('click', function(e) {
// 	// 		e.preventDefault();
// 	// 		var _this = $(e.currentTarget);
// 	// 		var _alert = _this.closest('[data-element="alert"]');
// 	// 		_alert.remove();
// 	// 	})
// 	// })
// 	$('[data-element="alert-close"]').on('click', function(e) {
// 		e.preventDefault();
// 		$(this).closest('[data-element="alert"]').remove();
// 	})


	
// 	var _modal = document.querySelector('#add-category');
	
// 	_modal.addEventListener('shown.bs.modal', function (event) {
// 		var _tabs = document.querySelector('#myTab-1');
// 		var _tabsWidth = _tabs.scrollWidth;
// 		var _tabsScroll = _tabs.parentElement;
// 		var _tabsScrollWidth = _tabsScroll.scrollWidth;
// 		console.log(_tabsWidth);
// 		console.log(_tabsScrollWidth);
// 		if(_tabsWidth < _tabsScrollWidth) {
// 			console.log(_tabsWidth >= _tabsScrollWidth);
// 			_tabs.classList.add('no-indents');
// 		}
// 	})

// 	$.fn.modal.Constructor.prototype.enforceFocus = function () {};
// });