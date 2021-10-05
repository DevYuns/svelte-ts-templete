<script lang="ts">
import {createEventDispatcher} from "svelte";


    export let label: string = "";
    export let id: string = "";
    export let type: string = "text";

    const dispatch = createEventDispatcher();

    function handleInput(e: Event) {
      const value = e.target;

      dispatch('changed', {value, id});
    }
  </script>
  
  <div>
    <label for={id}>{label}</label>
    <input {id} {type} on:input={handleInput} />
  </div>