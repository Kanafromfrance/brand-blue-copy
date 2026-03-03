
-- Deny all public INSERT operations on blog_posts
CREATE POLICY "Deny public inserts on blog_posts"
  ON public.blog_posts FOR INSERT
  WITH CHECK (false);

-- Deny all public UPDATE operations on blog_posts
CREATE POLICY "Deny public updates on blog_posts"
  ON public.blog_posts FOR UPDATE
  USING (false);

-- Deny all public DELETE operations on blog_posts
CREATE POLICY "Deny public deletes on blog_posts"
  ON public.blog_posts FOR DELETE
  USING (false);
