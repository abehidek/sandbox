<template>
<div class="w-full">
  <h1 class="flex justify-center mb-8 text-5xl">Lista de materiais</h1>
  <div v-for="material in materials" :key="material.id">
    <div v-if="!material.edit" class="w-full sm:px-6 lg:px-8">
      <div class="sm:px-6 lg:px-8 overflow-hidden shadow-md rounded-xl bg-gray-200 mb-5">
        <div class="flex justify-between px-6 py-4 border-b border-gray-300 font-bold uppercase">
            <p class="p-2">{{ material.name }}</p>
            <p class="p-2">Quantidade: {{ material.qtd }}</p>
        </div>
        <div class="flex justify-between px-6 py-4 border-b border-gray-300 font-semibold uppercase"><p class="p-2">{{ material.brand }}</p></div>
        <div class="flex p-6 border-b border-gray-300"><p class="p-2">{{ material.desc }}</p></div>
        <div class="p-6 border-gray-300 items-center grid grid-cols-1 xl:grid-cols-9 gap-2 justify-items-center">
          <p class="col-span-1 xl:col-span-5">Última atualização: </p>
          <button class="flex w-full justify-center col-span-1 xl:col-span-2 bg-blue-500 shadow-md text-sm text-white font-bold py-3 px-2 hover:bg-blue-400 rounded uppercase" @click="toggleEdit(material)">Editar</button>
          <button class="flex w-full justify-center col-span-1 xl:col-span-2 bg-blue-500 shadow-md text-sm text-white font-bold py-3 px-2 hover:bg-blue-400 rounded uppercase" @click="deleteMaterial(material.id)">Excluir</button>
        </div>
      </div>
    </div>
    <div v-else class="w-full sm:px-6 lg:px-8">
      <div class="sm:px-6 lg:px-8 overflow-hidden shadow-md rounded-xl bg-gray-200 mb-5">
        <div class="flex justify-between px-6 py-4 border-b border-gray-300 font-bold uppercase">
            <input v-model="material.name" class="bg-transparent p-2" placeholder="Nome">
            <input v-model="material.qtd" class="bg-transparent p-2" placeholder="Quantidade">
        </div>
        <div class="flex justify-between px-6 py-4 border-b border-gray-300 font-semibold uppercase"><input v-model="material.brand" class="bg-transparent p-2" placeholder="Marca"></div>
        <div class="flex p-6 border-b border-gray-300"><input v-model="material.desc" class="bg-transparent p-2" placeholder="Descrição"></div>
        <div class="p-6 border-gray-300 items-center grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-2">
            <button @click="saveEdit(material)" class="flex justify-center w-full bg-blue-500 shadow-md text-sm text-white font-bold py-3 px-2 hover:bg-blue-400 rounded uppercase" >Salvar</button>
            <button @click="cancelEdit(material)" class="flex justify-center w-full bg-blue-500 shadow-md text-sm text-white font-bold py-3 px-2 hover:bg-blue-400 rounded uppercase">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="add" class="w-full sm:px-6 lg:px-8"> <!-- ADD ONE -->
    <div class="sm:px-6 lg:px-8 overflow-hidden shadow-md rounded-xl bg-gray-200 mb-5 h-60 items-center flex justify-center">
      <button @click="toggleAdd()">
        <div class="h-40 w-40 items-center flex justify-center">
          <p class="text-9xl">+</p>
        </div>
      </button>
    </div>
  </div>
  <div v-else class="w-full sm:px-6 lg:px-8"> <!-- ADD ONE -->
    <div class="sm:px-6 lg:px-8 overflow-hidden shadow-md rounded-xl bg-gray-200 mb-5">
      <div class="flex justify-between px-6 py-4 border-b border-gray-300 font-bold uppercase">
          <input v-model="nameField" class="bg-transparent p-2" placeholder="Nome">
          <input v-model="qtdField" class="bg-transparent p-2" placeholder="Quantidade">
      </div>
      <div class="flex justify-between px-6 py-4 border-b border-gray-300 font-semibold uppercase"><input v-model="brandField" class="bg-transparent p-2" placeholder="Marca"></div>
      <div class="flex p-6 border-b border-gray-300"><input v-model="descField" class="bg-transparent p-2" placeholder="Descrição"></div>
      <div class="p-6 border-gray-300 items-center grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-2">
          <button @click="addMaterial()" class="flex justify-center w-full bg-blue-500 shadow-md text-sm text-white font-bold py-3 px-2 hover:bg-blue-400 rounded uppercase" >Adicionar</button>
          <button @click="toggleAdd()" class="flex justify-center w-full bg-blue-500 shadow-md text-sm text-white font-bold py-3 px-2 hover:bg-blue-400 rounded uppercase">Cancelar</button>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MaterialList",
  data () {
    return {
      materials: [],
      add: true
    }
  },
  beforeMount () {
    this.getMaterial()
  },
  methods: {
    fieldIsEmpty (material) {
      if (material.name === '' || material.qtd === '' || material.desc === '' || material.brand === '') {
        return true
      } else {
        return false
      }
    },
    addMaterial () {
      try {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: this.nameField,
            desc: this.descField,
            qtd: this.qtdField,
            brand: this.brandField
          })
        }
        fetch('http://127.0.0.1:8000/api/materials', requestOptions)
          .then(response => response.json())
          .then(data => {
            this.materials = data
          })
      } catch (err) {
        console.log(err)
      } finally {
        this.nameField = null
        this.descField = null
        this.qtdField = null
        this.brandField = null
      }
    },
    getMaterial () {
      fetch('http://127.0.0.1:8000/api/materials')
        .then(response => response.json())
        .then(data => {
          this.materials = data
          console.log(this.materials)
        })
    },
    cancelEdit (material) {
      material.edit = !material.edit
      this.getMaterial()
    },
    toggleEdit (material) {
      material.edit = !material.edit
    },
    saveEdit (material) {
      const isEmpty = this.fieldIsEmpty(material)
      if (isEmpty) {
        alert('Preencha os campos')
        this.getMaterial()
      } else {
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: material.name,
            desc: material.desc,
            qtd: material.qtd,
            brand: material.brand
          })
        }
        fetch('http://127.0.0.1:8000/api/materials/' + material.id, requestOptions)
          .then(response => response.json())
          .then(data => {
            this.materials = data
          })
        material.edit = !material.edit
      }
    },
    deleteMaterial (id) {
      const requestOptions = {
        method: 'DELETE'
      }
      fetch('http://127.0.0.1:8000/api/materials/' + id, requestOptions)
        .then(response => response.json())
        .then(data => {
          this.materials = data
        })
    },
    toggleAdd() {
      this.add = !this.add
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
