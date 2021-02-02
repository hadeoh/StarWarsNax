import swapi from 'swapi-node';

export const getCharacters = async (sortParam, filterParam) => {
    try {
        let data = await swapi.get("https://swapi.dev/api/people");
        let res;
        if (sortParam == 'name') {
            res = data.results.sort((a,b) => {
                let x = a.name.toLowerCase();
                let y = b.name.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            })
        } else {
            res = data.results.sort(
                (a, b) => b[`${sortParam}`] - a[`${sortParam}`]
              );
        }
        
        let newRes = res.filter(ele => ele.gender == filterParam);
        let cmHeight = 0;
        newRes.forEach(element => {
            cmHeight += parseFloat(element.height)
        });
        let ftHeight = cmHeight * 0.0328084;
        let inHeight = cmHeight * 0.393701;
        let response = {
            data: newRes,
            numberOfCharacter: newRes.length,
            totalHeightCm: cmHeight + 'cm',
            totalHeightFt: ftHeight.toFixed(2) + 'ft',
            totalHeightIn: inHeight.toFixed(2) + 'in'
        }
        return response;
    } catch (error) {
        return error;
    }
}