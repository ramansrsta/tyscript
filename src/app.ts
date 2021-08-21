class DataStore<T extends string | number> {
    private data : T[] = []

    addData(item: T){
        this.data.push(item)
    }

    removeData(item: T){
        this.data.splice(this.data.indexOf(item),1)
    }

    getInfor(){
        console.log([...this.data])
    }
}

const store = new DataStore<string>()
store.addData("Ram");
store.addData("Shyam");
store.removeData("Ram")
store.getInfor()