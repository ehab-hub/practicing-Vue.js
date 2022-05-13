const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: ''
        };
    },
    methods: {
        outputFullname() {
            console.log('heeeeeeeeeeey');
            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + 'hossam';
        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName;
        },
        resetInput() {
            this.name = '';
        },
        confirmForm() {
            this.name = '';
        },
        submitForm() {
            alert('heeey!');
        },
        add() {
            console.log('adddddddddd');

            this.counter++;
        },
        remove() {
            console.log('substract');
            this.counter--;
        }
    }
});

app.mount('#events');