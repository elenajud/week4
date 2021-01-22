for (x of genThree(4))
{
console.log((x.slice()).reverse())
}
function* genThree(n)//создаёт генератор троичных последовательностей, добавляющий 1
{
	let b = []
	for(let i = 0; i < n; i++)
		b.push(0)
	yield b
	let i = 0
	while(true)
	{
		if(i == n)
		{
			return
		}
		else if( b[i] == 2)
		{
			b[i] = 0
			i++
		}
		else
		{
			b[i]++
			i = 0
			yield b
		}
	}
}



