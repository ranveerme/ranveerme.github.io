<script lang='ts'>
  import { footer as footerConfig } from '$lib/config/general'
  import { site } from '$lib/config/site'

  let className: string | undefined
  export { className as class }
  export let sticky: boolean = false
  export let rounded: boolean = false
</script>

<footer
  class="footer footer-center bg-base-300 text-base-content shadow-inner p-8 {rounded
    ? 'rounded-box'
    : 'md:rounded-box'} {sticky ? 'sticky bottom-0 z-0 md:static' : ''} {className ?? ''}"
  id='footer'>
  <div class='prose'>
    <p>
      {#if footerConfig.nav}
        {#each footerConfig.nav as { link, text }, i}
          <a href={link} rel='noopener noreferrer external' target='_blank'>{text}</a>
          {#if i + 1 < footerConfig.nav.length}
            <span class='mr-1'>·</span>
          {/if}
        {/each}
        <br />
      {/if}
      Copyright © {footerConfig.since && footerConfig.since !== new Date().toJSON().substring(0, 4)
        ? `${footerConfig.since} - ${new Date().toJSON().substring(0, 4)}`
        : new Date().toJSON().substring(0, 4)}
      {site.author.name}
      <br />
      {#if footerConfig.html}
        <br />
        {@html footerConfig.html}
      {/if}
    </p>
  </div>
</footer>
