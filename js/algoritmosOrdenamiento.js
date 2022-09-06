function imgSelectF() {
    let img = document.getElementById("imgSelect").value;

    if (img === "1") {
        img1();
    } else if (img === "2") {
        img2();
    } else if (img === "3") {
        img3();
    }
}
function img1() {
    const img = "img/familia/";
    const dear1 = document.getElementById("1").value = "5";
    const dear_1 = document.getElementById("a").src = img + "5.png";
    const dear2 = document.getElementById("2").value = "2";
    const dear_2 = document.getElementById("b").src = img + "2.png";
    const dear3 = document.getElementById("3").value = "1";
    const dear_3 = document.getElementById("c").src = img + "1.png";
    const dear4 = document.getElementById("4").value = "6";
    const dear_4 = document.getElementById("d").src = img + "6.png";
    const dear5 = document.getElementById("5").value = "3";
    const dear_5 = document.getElementById("e").src = img + "3.png";
    const dear6 = document.getElementById("6").value = "4";
    const dear_6 = document.getElementById("f").src = img + "4.png";
}

function img2() {
    const img = "img/numeros/";
    const dear1 = document.getElementById("1").value = "4";
    const dear_1 = document.getElementById("a").src = img + "4.jpg";
    const dear2 = document.getElementById("2").value = "3";
    const dear_2 = document.getElementById("b").src = img + "3.jpg";
    const dear3 = document.getElementById("3").value = "1";
    const dear_3 = document.getElementById("c").src = img + "1.jpg";
    const dear4 = document.getElementById("4").value = "2";
    const dear_4 = document.getElementById("d").src = img + "2.jpg";
    const dear5 = document.getElementById("5").value = "6";
    const dear_5 = document.getElementById("e").src = img + "6.jpg";
    const dear6 = document.getElementById("6").value = "5";
    const dear_6 = document.getElementById("f").src = img + "5.jpg";
}

function img3() {
    const img = "img/letras/";
    const dear1 = document.getElementById("1").value = "4";
    const dear_1 = document.getElementById("a").src = img + "4.jpg";
    const dear2 = document.getElementById("2").value = "1";
    const dear_2 = document.getElementById("b").src = img + "1.jpg";
    const dear3 = document.getElementById("3").value = "5";
    const dear_3 = document.getElementById("c").src = img + "5.jpg";
    const dear4 = document.getElementById("4").value = "2";
    const dear_4 = document.getElementById("d").src = img + "2.jpg";
    const dear5 = document.getElementById("5").value = "6";
    const dear_5 = document.getElementById("e").src = img + "6.jpg";
    const dear6 = document.getElementById("6").value = "3";
    const dear_6 = document.getElementById("f").src = img + "3.jpg";
}

function seleccionar() {
    let img = new Array;
    let nomb = document.getElementById("nombre").value; 
    
    for (let i = 1; i < 7; i++) {
        const temp = document.getElementById(String(i));
        
        if (temp.checked === true) {
            img.push(parseInt(temp.value));
        }
    }
    
    if (img.length === 0){
        alert('No se han seleccionado imagenes');
    }
    else{
        alert('Hola '+nomb+', las imagenes seleccionadas fueron: ' + img);
    }
}

function ordenar() {
    let img = new Array;

    for (let i = 1; i < 7; i++) {
        const temp = document.getElementById(String(i));

        if (temp.checked === true) {
            img.push(parseInt(temp.value));
        }
    }
    const direccion = document.getElementById("direccion");
    const algoritmo = parseInt(document.getElementById("metodoSelect").value);

    if (direccion.checked === true) {
        if (algoritmo === 1) {
            Burbuja(img);
        }
        else if (algoritmo === 2) {
            selectionSort(img);
        }
        else if (algoritmo === 3) {
            insertionSort(img);
        }
        else if (algoritmo === 4) {
            mergeSort(img);
            console.log(img);
        }
        else if (algoritmo === 5) {
            img = quickSort(img);
            console.log(img);
        }
        else if (algoritmo === 6) {
            shellSort(img);
        }
    }
    else {
        if (algoritmo === 1) {
            BurbujaDes(img);
        }
        else if (algoritmo === 2) {
            selectionSortDes(img);
        }
        else if (algoritmo === 3) {
            insertionSortDes(img);
        }
        else if (algoritmo === 4) {
            mergeSortDes(img);
            console.log(img);
        }
        else if (algoritmo === 5) {
            img = quickSortDsc(img);
            console.log(img);
        }
        else if (algoritmo === 6) {
            shellSortDes(img);
        }
    }
    mostrarOrdenado(img);
}

function Burbuja(lista) {
    let n, i, k, aux;
    n = lista.length;

    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }
    console.log(lista);
}

function BurbujaDes(lista) {
    let n, i, k, aux;
    n = lista.length;

    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] < lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }
    console.log(lista);
}

function selectionSort(lista) {
    let n, i, k;
    n = lista.length;

    for (k = 0; k < n; k++) {
        i = minorValueElement = k;

        for (i++; i < n; i++) {
            (lista[i] < lista[minorValueElement]) && (minorValueElement = i);
        }

        [lista[k], lista[minorValueElement]] = [lista[minorValueElement], lista[k]];
    }
    console.log(lista);
}

function selectionSortDes(lista) {
    let n, i, k;
    n = lista.length;

    for (k = 0; k < n; k++) {
        i = minorValueElement = k;

        for (i++; i < n; i++) {
            (lista[i] > lista[minorValueElement]) && (minorValueElement = i);
        }

        [lista[k], lista[minorValueElement]] = [lista[minorValueElement], lista[k]];
    }
    console.log(lista);
}

function insertionSort(lista) {
    let n, i, k, aux;
    n = lista.length;

    for (k = 1; k < n; k++) {
        i = k;
        aux = lista[k];

        while (i > 0 && lista[i - 1] > aux) {
            lista[i] = lista[i - 1];
            i--;
        }
        lista[i] = aux;
    }
    console.log(lista);
}

function insertionSortDes(lista) {
    let n, i, k, aux;
    n = lista.length;

    for (k = 1; k < n; k++) {
        i = k;
        aux = lista[k];

        while (i > 0 && lista[i - 1] < aux) {
            lista[i] = lista[i - 1];
            i--;
        }
        lista[i] = aux;
    }
    console.log(lista);
}

function merge(list, start, middle, end) {
    let i = start, j = middle, newList = [];
    while (middle > i || end > j) {
        if (i < middle && j < end) {
            list[i] < list[j] ? newList.push(list[i++]) : newList.push(list[j++]);
        } else {
            i < middle ? newList.push(list[i++]) : newList.push(list[j++]);
        }
    }
    newList.forEach((v, k) => list[start + k] = v);
}
function mergeSort(list, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? list.length : end;
    if (end - start > 2) {
        mergeSort(list, start, Math.floor((end + start) / 2));
        mergeSort(list, Math.floor((end + start) / 2), end);
        merge(list, start, Math.floor((end + start) / 2), end)
    } else if (end - start === 2 && list[start] > list[end - 1]) {
        const tmp = list[start];
        list[start] = list[end - 1];
        list[end - 1] = tmp;
    }
}

function mergeDes(list, start, middle, end) {
    let i = start, j = middle, newList = [];
    while (middle > i || end > j) {
        if (i < middle && j < end) {
            list[i] > list[j] ? newList.push(list[i++]) : newList.push(list[j++]);
        } else {
            i < middle ? newList.push(list[i++]) : newList.push(list[j++]);
        }
    }
    newList.forEach((v, k) => list[start + k] = v);
}
function mergeSortDes(list, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? list.length : end;
    if (end - start > 2) {
        mergeSortDes(list, start, Math.floor((end + start) / 2));
        mergeSortDes(list, Math.floor((end + start) / 2), end);
        mergeDes(list, start, Math.floor((end + start) / 2), end)
    } else if (end - start === 2 && list[start] < list[end - 1]) {
        const tmp = list[start];
        list[start] = list[end - 1];
        list[end - 1] = tmp;
    }
}

function quickSort(arrayPosicion) {
    if (arrayPosicion.length < 1) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arrayPosicion[0];
    for (var i = 1; i < arrayPosicion.length; i++) {
        arrayPosicion[i] < pivot ? left.push(arrayPosicion[i]) : right.push(arrayPosicion[i]);
    }
    
    return [].concat(quickSort(left), pivot, quickSort(right));  
}

function quickSortDsc(arrayPosicion) {
    if (arrayPosicion.length < 1) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arrayPosicion[0];
    for (var i = 1; i < arrayPosicion.length; i++) {
        arrayPosicion[i] > pivot ? left.push(arrayPosicion[i]) : right.push(arrayPosicion[i]);
    }
    return [].concat(quickSortDsc(left), pivot, quickSortDsc(right));
}

function shellSort(lista) {
    const gap = lista.length;
    let h = 1;

    while (h < (gap / 3)) {
        h = 3 * h + 1;
    }

    while (h >= 1) {
        for (let i = h; i < gap; i++) {
            for (let j = i; j >= h && lista[j] < lista[j - h]; j -= h) {
                [lista[j], lista[j - h]] = [lista[j - h], lista[j]];
            }
        }
        h = (h - 1) / 3;
    }

    console.log(lista);
}

function shellSortDes(lista) {
    const gap = lista.length;
    let h = 1;

    while (h < (gap / 3)) {
        h = 3 * h + 1;
    }

    while (h >= 1) {
        for (let i = h; i < gap; i++) {
            for (let j = i; j >= h && lista[j] > lista[j - h]; j -= h) {
                [lista[j], lista[j - h]] = [lista[j - h], lista[j]];
            }
        }
        h = (h - 1) / 3;
    }

    console.log(lista);
}

function mostrarOrdenado(lista){
    
    
    let img = document.getElementById("imgSelect").value;

    if (img === "1") {
        familiaO(lista);
    } else if (img === "2") {
        numerosO(lista);
    } else if (img === "3") {
        letraso(lista);
    }
}

function familiaO(lista){
    const img = "img/familia/";
    for(let i = 0; i < lista.length; i++) {
        document.getElementById("a"+(i+1)).src=img+lista[i]+".png";
    };
}

function numerosO(lista){
    const img = "img/numeros/";
    for(let i = 0; i < lista.length; i++) {
        document.getElementById("a"+(i+1)).src=img+lista[i]+".jpg";
    };
}

function letraso(lista){
    const img = "img/letras/";
    for(let i = 0; i < lista.length; i++) {
        document.getElementById("a"+(i+1)).src=img+lista[i]+".jpg";
    };
}