for (let i = 0; i <= 2; i++){
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.flexDirection = 'column';
    div.style.margin = "auto";
    div.style.width = '50%';
    document.body.append(div);

    for (let j = 1; j <= 5; j++){
        if (i == 0){
        const heading = document.createElement('h1');
        heading.innerText = 'Rad ' + j;
        heading.style.fontSize =  `${j*9}px`;
        heading.style.marginTop = '4px';
        const hue = 130 + (j * 15);
        heading.style.backgroundColor = `hsl(${hue}, 95%, 80%)`;
        heading.style.textAlign = 'center';
        heading.style.color = 'hsla(234, 55%, 56%, 0.8)';
        div.append(heading);
        }
    }
    for (let k = 0; k<3; k ++){
        if (i == 1){
            div.style.border = 'solid 0.1px black';
            div.style.flexDirection = 'row';
            div.style.justifyContent = 'space-evenly';           
            
            const firstOrderedList = document.createElement('ol');
            firstOrderedList.style.padding = "0";
            firstOrderedList.style.backgroundColor = "hsla(237, 55%, 79%, 0.8)";
            firstOrderedList.style.width = "60px";
            firstOrderedList.style.height = "200px";
            firstOrderedList.style.display = "flex";
            firstOrderedList.style.flexDirection = "column";
            firstOrderedList.style.justifyContent = "center";
            firstOrderedList.style.alignItems = "center";
            document.body.append(firstOrderedList);
            div.append(firstOrderedList);
            
            for (let l = 0; l <= 9; l++) { 
                    if (k == 0){
                    const listElements = document.createElement('li');
                    listElements.style.listStyleType = 'none';
                    listElements.innerText =  l;
                    listElements.style.width = '40px';
                    firstOrderedList.append(listElements);
                        if (l % 2 == 0 && (l < 4 || l > 5) ) {
                        listElements.style.backgroundColor = 'black';
                        listElements.style.color = 'white';
                    }  else if (l % 2 == 1) {
                        listElements.style.backgroundColor = 'white';
                    }
                }
            }
            for (let m = 9; m >= 0; m--) {
                if (k == 1){
                const listElements = document.createElement('li');
                firstOrderedList.append(listElements);
                listElements.style.listStyleType = 'none';
                listElements.innerText = m;
                listElements.style.width = '40px';
                listElements.style.textAlign = 'center';
                if (m % 2 == 0 && m < 7) {
                        listElements.style.backgroundColor = 'black';
                        listElements.style.color = 'white';
                } else if (m % 2 == 1) {
                        listElements.style.backgroundColor = 'white';
                    }
                }
            }
            
            const array = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio']
            array.forEach((el, index, array)=>{
                if (k == 2){
                    const orderedNumbers = document.createElement('p');
                    firstOrderedList.append(orderedNumbers);
                    orderedNumbers.innerText = array[index];
                    orderedNumbers.style.width = '40px';
                    orderedNumbers.style.length = '50px';
                    orderedNumbers.style.margin = '0px';
                    orderedNumbers.style.padding = '0px';
                    orderedNumbers.style.textAlign = 'right';
                    if (index % 2 == 0 && (index < 5 || index > 5)) {
                        orderedNumbers.style.backgroundColor = 'black'; 
                        orderedNumbers.style.color = 'white';
                    } else if (index % 2 == 1 && (index > 5 || index < 4)) {
                        orderedNumbers.style.backgroundColor = 'white';
                        orderedNumbers.style.color = 'black';
                    }
                }
            })
        }      
    }
}