$(document).ready(function () {
    axios.get(all_RoleList, common).then(function (result) {
        console.log(result);
        let select = document.getElementById('usrole');
        for (let i = 0; i < result.data.resultSet.length; i++) {
            console.log(result.data.resultSet[i]);
            var optname = result.data.resultSet[i].roleName;
            var optid = result.data.resultSet[i].roleName;
            var el = document.createElement("option");
            el.textContent = optname;
            el.value = optid;
            select.appendChild(el);

        }

    });
});