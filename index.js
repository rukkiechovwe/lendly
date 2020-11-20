let openBtn = document.getElementById('openBtn')
		let closeBtn = document.getElementById('closeBtn')
		closeBtn.style.display = 'none'
		let sideNav = document.getElementById('sideNav')
		openBtn.addEventListener('click',function(){
			sideNav.style.display = 'flex'
			sideNav.style.width = '100%'
			sideNav.style.height = '100vh'
			sideNav.style.transform = 'scaleX(1)'
			closeBtn.style.display = 'block'
			openBtn.style.display = 'none'
		})
		closeBtn.addEventListener('click',function(){
			sideNav.style.transform = 'scaleX(0)'
			closeBtn.style.display = 'none'
			openBtn.style.display = 'block'
		})