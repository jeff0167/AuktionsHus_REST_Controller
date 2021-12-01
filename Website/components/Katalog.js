app.component('katalog-all', {

    template:
        /*html*/
        `<h2>Katalog</h2>
    <table class="table table-striped table-bordered">
        <thead>
            <th>
                Id
            </th>
            <th>
                
            </th>
            <th>
                Navn
            </th>
            <th>
                Kategori
            </th>
            <th>
                Startdato
            </th>
            <th>
                Slutdato
            </th>
            <th>
                Pris
            </th>
        </thead>
        <tbody>
            <tr v-for="item in items">
                <td>{{item.id}}</td>
                <td><a href="#" style="height: 110px">{{item.image}}</a></td>
                <td>{{item.name}}</td>
                <td>{{item.category}}</td>
                <td>{{item.startDate}}</td>
                <td>{{item.endDate}}</td>
                <td>{{item.price}}</td>
            </tr>
        </tbody>
    </table>
    `,
    data() {
        return {
            items: [],

        }
    },
    methods: {

    }
})