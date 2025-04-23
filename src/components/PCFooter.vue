<template>
  <footer class="footer">
    <PCContentWrapper>
      <div class="footer__wrapper">
        <img
          alt="Pink Chiken"
          class="footer__logo"
          src="@/assets/img/logo-footer.svg"
          width="181"
          height="24"
        />

        <a class="footer__confidentiality" href="#">Политика конфиденциальности</a>

        <ul class="footer__languages">
          <li class="footer__locale">
            <img alt="глобус" src="@/assets/img/global.svg" width="24" height="24" />
          </li>

          <li v-for="locale in locales" :key="locale" class="footer__locale">
            <a href="#" :class="{ 'footer__locale-link--active': locale.isActive }">{{
              locale.name
            }}</a>
          </li>
        </ul>

        <div class="footer__contacts">
          <img alt="почта" src="@/assets/img/mail.svg" width="24" height="24" />
          <span class="footer__mail-adress">pinkchicken@adaurum.ru</span>
        </div>

        <div class="footer__socials">
          <img alt="Telegram" src="@/assets/img/telegram.svg" width="40" height="40" />
          <img alt="WhatsApp" src="@/assets/img/whats-app.svg" width="40" height="40" />
        </div>
      </div>
    </PCContentWrapper>
  </footer>
</template>

<script setup>
import PCContentWrapper from '@/components/PCContentWrapper.vue';

defineProps({
  locales: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss">
@mixin flex-center {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

@mixin grid-display {
  display: grid;
  grid-template-columns: min-content min-content;
  column-gap: 12px;
}

.footer {
  padding: 40px 20px;
  font-size: 15px;
  line-height: normal;
  color: var(--pc-c-secondary-font-color);
  background-color: var(--pc-c-primary-background);

  &__wrapper {
    display: grid;
    align-items: center;
    grid-template-areas:
      'logo'
      'confidentiality'
      'languages'
      'contacts'
      'socials';
    row-gap: 20px;
  }

  &__logo {
    grid-area: 'logo';
  }

  &__confidentiality {
    @include flex-center();
    grid-area: confidentiality;
  }

  &__languages {
    @include grid-display();
    grid-area: languages;
    grid-template-columns: 26px repeat(3, min-content);
  }

  &__locale {
    @include flex-center();
    height: -webkit-fill-available;
  }

  &__locale-link--active {
    color: var(--pc-c-primary-color);
  }

  &__contacts {
    @include grid-display();
    grid-area: contacts;
    align-items: center;
  }

  &__socials {
    @include grid-display();
    grid-area: socials;
  }
}

@media (min-width: 768px) {
  .footer {
    padding: 33px 0;
    font-size: 15px;
    background-color: var(--pc-c-elements-background);

    &__wrapper {
      grid-template-areas:
        'logo confidentiality .'
        'socials languages contacts';
      row-gap: 26px;
    }

    &__logo {
      width: 209px;
      height: 28px;
    }

    &__confidentiality {
      align-self: end;
    }
  }
}

@media (min-width: 992px) {
  .footer {
    &__logo {
      width: 219px;
      height: 30px;
    }

    &__wrapper {
      grid-template-areas: 'logo confidentiality contacts languages socials';
    }

    &__confidentiality {
      align-self: center;
    }
  }
}
</style>
