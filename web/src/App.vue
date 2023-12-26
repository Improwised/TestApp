<script setup>
import { ref, onMounted } from 'vue';
let data = ref();
let value1 = ref(0);
let value2 = ref(0);
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import utils from 'common/utils';

function calculateSum() {
  data.value = "Output is " + utils.sum(value1.value, value2.value);
}
function calculateSub() {
  data.value = "Output is " + utils.sub(value1.value, value2.value);
}
</script>
<template>
  <Header />
  <main>
    <div class="">
      <section class="py-5 border-bootom">
        <div class="container">
          <h1 class="text-center">
            Welcome to TetApp
          </h1>
        </div>
      </section>
      <section class="py-4">
        <div class="container">
          <div class="mb-3 row">
            <div class="col-sm-6">
              <input
                id="value1"
                v-model="value1"
                type="text"
                class="form-control"
              >
            </div>
            <div class="col-sm-6">
              <input
                id="value2"
                v-model="value2"
                type="text"
                class="form-control"
              >
            </div>
          </div>
          <div class="mb-3">
            <button
              class="btn btn-success btn-sm mx-2"
              @click="calculateSum"
            >
              Calculate Sum
            </button>

            <button
              class="btn btn-danger btn-sm mx-2"
              @click="calculateSub"
            >
              Calculate Substraction
            </button>


            <div
              id="print"
              class="row py-3"
            >
              <h3>{{ data }}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  <Footer />
</template>
