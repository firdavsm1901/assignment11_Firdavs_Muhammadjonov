new Vue({
    el: '#listRendering',
    data: {
        items: [],
        newItem: ''
    },
    methods: {
        addItem() {
            if (this.newItem.trim() !== '') {
                this.items.push(this.newItem);
                this.newItem = '';
            }
        },
        removeItem(index) {
            this.items.splice(index, 1);
        },
        addItemOnEnter(event) {
            if (event.key === 'Enter') {
                this.addItem();
            }
        }
    }
});
