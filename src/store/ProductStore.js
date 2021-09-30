import {makeAutoObservable} from "mobx";

export default class ProductStore{
    constructor(){
        this._types = [
            {id: 1, name: 'Новинки'},
            {id: 2, name: 'Одежда'},
            {id: 3, name: 'Обувь'},
            {id: 4, name: 'Спорт'}
        ]
        this._subtypes = [
            {id: 1, name: 'Худи'},
            {id: 2, name: 'Лонгсливы'},
            {id: 3, name: 'Футболки'},
            {id: 4, name: 'Джинсы'},
            {id: 5, name: 'Пиджак'},
            {id: 6, name: 'Спортивные костюмы'},
            {id: 7, name: 'Акции'},
            {id: 8, name: 'Скидки'},
            {id: 9, name: 'Black Friday'},
            {id: 10, name: 'Подборки'},
            {id: 11, name: 'Обувь'},
            {id: 12, name: 'Верхняя Одежда'},
            {id: 13, name: 'Головные уборы'},
            {id: 14, name: 'Сумки'},
            {id: 15, name: 'Ремни'},
            {id: 16, name: 'Аксессуары'},
        ]
        this._devices = [
            {id: 1, name: "Armani Exchange", description: "add", size: "S", color: "black", price: 60000, img: ""},
            {id: 1, name: "Armani Exchange", description: "add", size: "S", color: "black", price: 60000, img: ""},
            {id: 1, name: "Armani Exchange", description: "add", size: "S", color: "black", price: 60000, img: ""},
            {id: 1, name: "Armani Exchange", description: "add", size: "S", color: "black", price: 60000, img: ""}
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types 
    }
    setBrands(brands){
        this._brands = brands 
    }
    setProducts(products){
        this._products = products 
    }
    getTypes(types){
        return this._types
    }
    getBrands(brands){
        return this._brands 
    }
    getTypes(products){
        return this._products  
    }
}