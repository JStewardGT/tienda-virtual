const tagAttrs = obj => (content = '') =>
	`<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`

const tag = t => typeof t === 'string' ? tagAttrs({ tag: t }) : tagAttrs(t)

const productos = [
	{
		id: 0,
		imagen: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-9-inputs-outputs/src/assets/images/stickers1.png',
		nombre: 'STICKERS1',
		perecio: '20000'
	},
	{
		id: 1,
		imagen: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-9-inputs-outputs/src/assets/images/mug.png',
		nombre: 'MUG',
		perecio: '15000'
	},
	{
		id: 2,
		imagen: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-9-inputs-outputs/src/assets/images/camiseta.png',
		nombre: 'CAMISETA',
		perecio: '60000'
	},
	{
		id: 3,
		imagen: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-9-inputs-outputs/src/assets/images/pin.png',
		nombre: 'PIN',
		perecio: '8000'
	},
	{
		id: 4,
		imagen: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-9-inputs-outputs/src/assets/images/hoodie.png',
		nombre: 'HOODIE',
		perecio: '150000'
	},
	{
		id: 5,
		imagen: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-9-inputs-outputs/src/assets/images/stickers2.png',
		nombre: 'STICKERS2',
		perecio: '9000'
	},
];

let carProductos = [];

const galeria = document.getElementById('galeria')

for (producto of productos) {
	galeria.innerHTML += `
	<figure class="producto">
		<img class="producto--img" src="${producto.imagen}" alt="${producto.nombre}">
		<h2 class="producto--nombre">${producto.nombre}</h2>
		<p class="producto--precio text-right">$${producto.perecio}</p>
		<div class="text-right">
			<button class="btn btn--black" onclick="addCar(${producto.id})">AÑADIR AL CARRITO</button>
		</div>
	</figure>
	`
}

const addCar = id => {
	pushProduct(id)
	actualizarProductosCar()
}

const removeCar  = id => {
	carProductos.splice(id, 1)
	actualizarProductosCar()
}

const pushProduct = id => carProductos.push(productos[id])

const modal = document.getElementById('modal')

const openModal = () => modal.classList.add('active')
const closeModal = () => modal.classList.remove('active')


const carGaleria = document.getElementById('car-galeria')

const actualizarProductosCar = () => {
	carGaleria.innerHTML = ''
	i = 0
	for (carProducto of carProductos) {
		carGaleria.innerHTML += `
		<figure class="car-producto">
			<button class="modal--close" onclick="removeCar(${i})">
				<i class="material-icons">close</i>
			</button>
			<img class="car-producto--img" src="${carProducto.imagen}" alt="${carProducto.nombre}">
			<div class="car-producto--div">
				<h2 class="car-producto--nombre">${carProducto.nombre}</h2>
				<p class="car-producto--precio">$${carProducto.perecio}</p>
			</div>
		</figure>
		`
		i++
	}
}