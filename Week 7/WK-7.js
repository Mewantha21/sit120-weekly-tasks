 Vue.component('component1',{
        template: '<div>Welcome to Melbourne</div>',
    });
    Vue.component('component2',{
        template: '<div>{{mas}}</div>',
        data: function() {
            return{
                mas: 'Explore australia',
            };
        },
    });

    var app1 = new Vue({
        el: '#app1',
        data: {
            text: 'WEEK 7',
        },
    });