<script>
  import DateInput from "../components/DateInput.svelte";
  import Input from "../components/Input.svelte";

  const dayOfWeekValues = {
    0: 0.0,
    1: 0.0,
    2: 0.0,
    3: 0.0,
    4: 0.0,
    5: 0.0,
    6: 0.0
  }

  let startDate;
  let endDate;
  let totalUnits = 0.0;
  let totalHours = 0.0;

  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const handleInput = (day, value) => {
    dayOfWeekValues[day] = parseFloat(value);
  }

  const handleEndDate = (event) => {
    endDate = event.target.valueAsNumber;
  }

  const handleStartDate = (event) => {
    startDate = event.target.valueAsNumber;
  }

  $: if (endDate && startDate) {
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      let hours = 0;
      for(let i = 0; i <= diffDays; i++) {
        const nextDay = addDays(startDate, i);
        hours += dayOfWeekValues[nextDay.getDay()];
      }

      totalHours = hours;
      totalUnits = hours * 4.0;
    }

</script>

<h2 class="text-2xl font-bold mb-12">If you don't know what this is, its not for you, sorry!</h2>
<section class="grid grid-cols-1 sm:grid-cols-2 gap-4 container max-w-3xl">
  <div class="grid gap-2 sm:justify-center">
    <Input suffix='hours' handleInput={handleInput} label='Monday' day={0} type='number'/>
    <Input suffix='hours' handleInput={handleInput} label='Tuesday' day={1} type='number'/>
    <Input suffix='hours' handleInput={handleInput} label='Wednesday' day={2} type='number'/>
    <Input suffix='hours' handleInput={handleInput} label='Thursday' day={3} type='number'/>
    <Input suffix='hours' handleInput={handleInput} label='Friday' day={4} type='number'/>
    <Input suffix='hours' handleInput={handleInput} label='Saturday' day={5} type='number'/>
    <Input suffix='hours' handleInput={handleInput} label='Sunday' day={6} type='number'/>
  </div>
  <div class="grid gap-2 fit-content sm:justify-center">
    <DateInput handleInput={handleStartDate} label='Start Date:' />
    <DateInput handleInput={handleEndDate} label='End Date:' />
    <div class="mt-8 text-2xl font-bold">Total <span class="text-emerald-600">{totalUnits}</span> units</div>
    <div class="mt-2 text-2xl font-bold">Total <span class="text-emerald-600">{totalHours}</span> hours</div>
  </div>
</section>

<style>
  .fit-content {
    grid-template-rows: fit-content(100px) fit-content(100px) 1fr 1fr;
  }
</style>