// Напиши всі можливі варіанти створення функцій
function firstType() {
    return null;
  }

  const secondType = function () {
    return null;
  };

  const trirdType = () => {
    return null;
  };

  // Створи функцію, яка буде виводити кількість переданих їй аргументів.

  function paramsAmount() {
    return arguments.length;
  }

  // Напиши функцію, яка приймає 2 числа і повертає :
      // -1, якщо перше число менше, ніж друге;
      // 1 - якщо перше число більше, ніж друге;
      // 0 - якщо числа рівні.

      function twoNumbers(firstNumber, secondNumber) {
        if (firstNumber < secondNumber) {
          return -1;
        } else if (firstNumber > secondNumber) {
          return 1;
        } else if (firstNumber == secondNumber) {
          return 0;
        }
      }

      function showTwoNum () {
        const first_number = document.getElementById('first_number').value;
        const second_number = document.getElementById('second_number').value;
        document.getElementById('two_numb_result').value = twoNumbers( first_number,second_number);
      }
      
       // Напиши функцію, яка обчислює факторіал переданого їй числа.

       function faktoril(n) {
        let result =1;
        for (let i=1; i<=n; i++) {
            result*=i;
        }
        return result
      }

      function showFaktorial() {
        const newNumb = document.getElementById('fakt_number').value;
        document.getElementById('faktorial').value=faktoril(newNumb);
      }
      
        // Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

        function oneNumb(oneN, twoN, threeN) {
            return parseInt(`${oneN}${twoN}${threeN}`);
          }
         
          function turnNumb() {
            const oneN = document.getElementById('oneN').value;
            const twoN = document.getElementById('twoN').value;
            const threeN = document.getElementById ('threeN').value;
            document.getElementById('turnNumb').value=oneNumb(oneN, twoN, threeN);
          }

         // Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата
         
         function area(a, b) {
            if (b) {
                return b*a
            } else {
                return a*a
            }
         }

         function showArea () {
            const width = document.getElementById('width').value;
            const height = document.getElementById('height').value;
            if(width && height) {
                document.getElementById('area_result').value=area(width, height);
            } else if (width) {
                document.getElementById('area_result').value=area(width);
            }
            else if (height){
                document.getElementById('area_result').value=area(height);
            }
            else {
                document.getElementById('area_result').value='height or width are not correct'
            }
         }
        
        //  Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

        function perfect (number) {
            let dilnukuSym = 0;
            for (let i=1; i <= number / 2; i++) {
                if (number%i===0) {
                    dilnukuSym+=i;
                }
            }
            if (number === dilnukuSym) {
                return true
            }
             else {
                return false

             }
        }
        function numbPerfect () {
            const number = +document.getElementById('perf_numb').value;
            document.getElementById('perfect_result').value=perfect(number) ? 'Number is Perfect' : 'Number is NOT Perfect';
        }
            
        // Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
        
        function doskonali(firstNumber, secondNumber) {
            let min, max;
            let result = []
        
        if(firstNumber<=secondNumber) {
            min = firstNumber;
            max = secondNumber;
        }
        else {
            min = secondNumber;
            max = firstNumber;
        }

        for(let i = min; i <= max; i++) {
            if (perfect(i)) {
                result.push(i);
            }
        }
        return result;
    }
        
        function perfResult() {
            const firstNumber = document.getElementById('first-number').value;
            const secondNumber = document.getElementById('second-number').value;

            document.getElementById('doskonali_result').value=doskonali(firstNumber, secondNumber);
        }
