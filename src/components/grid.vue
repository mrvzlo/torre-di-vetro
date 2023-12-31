<template>
   <button class="btn-help" v-on:click="startTutorial">&nbsp;❔&nbsp;</button>
   <div class="dice-grid" :class="`${boardStatus.canPick(false) ? '' : 'grid-disabled'}`">
      <div v-for="(dice, i) in pools.private" :key="i" v-on:mousedown="() => pick(i, false)">
         <dice :dice="dice" />
      </div>
   </div>
   <div class="dice-grid board">
      <div v-for="(dice, i) in pools.central" :key="i" v-on:mousedown="() => place(i)">
         <dice :dice="dice" />
      </div>
   </div>
   <div class="dice-grid" :class="`${boardStatus.canPick(true) ? '' : 'grid-disabled'}`">
      <div v-for="(dice, i) in pools.public" :key="i" v-on:mousedown="() => pick(i, true)">
         <dice :dice="dice" />
      </div>
   </div>
   <div class="toolbar" :class="gameWon ? 'hidden' : ''">
      <button class="btn-yes" v-on:click="() => nextRound()" v-if="boardStatus.actions.length === 4">
         <img src="../assets/confirm.svg" alt="confirm" />
      </button>
      <button class="btn-no" v-on:click="() => undo()" v-if="boardStatus.actions.length > 0">
         <img src="../assets/undo.svg" alt="undo" />
      </button>
   </div>
   <div v-if="gameWon" class="game-over" v-on:click="() => end()">
      <div>Board completed!</div>
      <button class="btn-yes">
         <img src="../assets/confirm.svg" alt="confirm" />
      </button>
   </div>

   <div class="overlay" v-if="tutorial.show">
      <div :class="'status-' + tutorial.status">
         <div class="text-left">
            {{ $t('tutorial.' + tutorial.status) }}
         </div>
         <button class="btn-yes" v-on:click="tickTutorial">
            <img src="../assets/confirm.svg" alt="confirm" />
         </button>
      </div>
   </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, reactive } from 'vue';
import BoardStatus from './board-status';
import CookieManager from './cookie-manager';
import DiceManager from './dice.manager';
import DiceModel from './dice.model';
import { DiceType } from './dice.type';
import Dice from './dice.vue';
import PlacementManager from './placement.manager';
import PoolsModel from './pools.model';

let gameWon = false;

const emit = defineEmits(['onEnd']);
const props = defineProps<{ map: number[] }>();
const diceManager = new DiceManager();
const placementManager = new PlacementManager();
const cookieManager = new CookieManager();

let bag: number[] = [];
const pools = reactive(new PoolsModel());
const boardStatus = reactive(new BoardStatus());
const tutorial = reactive({ show: false, status: 0 });

const start = () => {
   bag = diceManager.generateBag();
   pools.central = props.map.map((x) => new DiceModel(x));
   pools.private = bag.splice(0, 10).map((x) => new DiceModel(x, true));
   nextRound();
   gameWon = false;

   if (!cookieManager.getCookie('show-tutorial')) {
      tutorial.show = true;
      tutorial.status = 0;
      cookieManager.setCookie('show-tutorial', 'true', 7);
   }
};

const startTutorial = () => {
   tutorial.show = true;
   tutorial.status = 0;
};

const tickTutorial = () => {
   tutorial.status++;
   if (tutorial.status >= 3) tutorial.show = false;
};

const nextRound = () => {
   pools.public = bag.splice(0, 3).map((x) => new DiceModel(x, true));
   boardStatus.mode = 'pick';
   boardStatus.actions = [];
};

const pick = (num: number, isPublic: boolean) => {
   const canPick = boardStatus.canPick(isPublic);
   if (!canPick) {
      const lastPick = boardStatus.actions[boardStatus.actions.length - 1];
      if (lastPick.number === num && lastPick.public === isPublic) undo();
      return;
   }
   const pickedDice = isPublic ? pools.public[num] : pools.private[num];
   if (!pickedDice.placed) return;
   pickedDice.active = true;

   boardStatus.actions.push({ mode: 'pick', public: isPublic, number: num });
   boardStatus.mode = 'place';
   placementManager.markActive(pools.central, pickedDice.type);
};

const place = (num: number) => {
   if (!pools.central[num].active) return;
   const picked = boardStatus.actions[boardStatus.actions.length - 1];
   boardStatus.actions.push({ mode: 'place', number: num, public: picked.public });
   const newDice = picked.public ? pools.public[picked.number] : pools.private[picked.number];
   pools.central[num].placed = true;
   pools.central[num].type = newDice.type;
   newDice.active = false;
   newDice.placed = false;
   newDice.type = DiceType.Empty;
   placementManager.clearActive(pools.central);
   boardStatus.mode = 'pick';
   if (pools.central.every((x) => x.placed)) {
      gameWon = true;
      return;
   }
   if (boardStatus.actions.length === 4) nextRound();
};

const undo = () => {
   boardStatus.mode = 'pick';
   placementManager.clearActive(pools.central);
   const action = boardStatus.actions.pop()!;
   if (action.mode === 'pick') {
      const pickedDice = action.public ? pools.public[action.number] : pools.private[action.number];
      pickedDice.active = false;
      return;
   }

   const pick = boardStatus.actions.pop()!;
   const pickedDice = pick.public ? pools.public[pick.number] : pools.private[pick.number];
   pickedDice.placed = true;
   pickedDice.type = pools.central[action.number].type;
   pools.central[action.number].placed = false;
   pools.central[action.number].type = props.map[action.number];
};

const end = () => emit('onEnd');

start();
</script>
