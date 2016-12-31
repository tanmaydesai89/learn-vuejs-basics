var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'Dynamically bound title.'
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: false
    }
});

var app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            {text: 'make todo no 2'},
            {text: 'make todo no 3'},
            {text: 'make todo no 4'},
            {text: 'check all todos as "done".'}
        ]
    }
});

var app5 = new Vue({
    el: '#app5',
    data: {
        message: 'Thank God I am not a palindrome.'
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('');
        }
    }
});

var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'Hello Vue.js'
    }
});

Vue.component('todo-item', {
    props: ['todoText'],
    template: '<li>{{ todoText.text }}</li>'
});

var app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            {text: 'vegetables'},
            {text: 'fruits'},
            {text: 'tomatoes'}
        ]
    }
});